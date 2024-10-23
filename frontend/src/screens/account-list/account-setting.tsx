import AccountSettingItem from '@/components/account-list/account-setting-item';
import Drawer from '@/components/drawer/drawer';
import {
  ArrowIOSBackIcon,
  ArrowIOSForwardIcon,
} from '@/components/icons/icons';
import ListGroup from '@/components/list-group/list-group';
import ScreenTopNavigation from '@/components/screen-top-navigation/screen-top-navigation';
import { useTheme } from '@/theme';
import ScreenView from '@/theme/screen-view';
import { NavigationParams, RootStackParamList } from '@/types/navigation';
import { Account } from '@/types/schemas/account';
import Clipboard from '@react-native-clipboard/clipboard';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  Button,
  StyleService,
  Text,
  TopNavigationAction,
  useStyleSheet,
} from '@ui-kitten/components';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useMMKVString } from 'react-native-mmkv';
import AccountEditDrawer from './account-edit-drawer';

function AccountSetting() {
  const { token } = useTheme();
  const themedStyles = useStyleSheet(styles);
  const { t } = useTranslation(['common']);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { params: routeParams } =
    useRoute<NavigationParams<'AccountSetting'>>();
  const { account: accountData } = routeParams;
  const [accountInfo, setAccountInfo] = useState<Account>(accountData);
  const [, setAccountList] = useMMKVString('accountList');
  const [editFieldName, setEditFieldName] =
    useState<keyof Omit<Account, 'id' | 'createTime' | 'updateTime'>>();
  const [openDelDrawer, setOpenDelDrawer] = useState(false);

  const updateRecord = (data: Account) => {
    setAccountList((current = '[]') => {
      const dataList = JSON.parse(current).map((m: Account) => {
        if (m.id === data.id) return data;
        return m;
      });
      return JSON.stringify(dataList);
    });
  };

  const onDeleteRecord = (id: string) => {
    setAccountList((current = '[]') => {
      const dataList = JSON.parse(current).filter((f: Account) => f.id !== id);
      return JSON.stringify(dataList);
    });
    setOpenDelDrawer(false);
    navigation.goBack();
  };

  const handleOnCloseEdit = () => {
    setEditFieldName(undefined);
  };

  const onSubmit = (data: Account) => {
    updateRecord(data);
    setAccountInfo(data);
    handleOnCloseEdit();
  };

  const handleClipboard = (text: string) => {
    Clipboard.setString(text);
    // todo: show toast
  };

  useEffect(() => {
    setAccountInfo(accountData);
  }, [accountData]);

  return (
    <ScreenView style={{ backgroundColor: token['background-basic-color-1'] }}>
      <ScreenTopNavigation
        style={{ backgroundColor: 'transparent' }}
        title={t('keyList.setting.screenTitle')}
        alignment="center"
        accessoryLeft={() => (
          <TopNavigationAction
            icon={ArrowIOSBackIcon}
            onPress={() => navigation.goBack()}
          />
        )}
      />
      <View style={themedStyles.container}>
        <View>
          <AccountSettingItem
            label={t('keyList.setting.title')}
            text={accountInfo.title}
            accessoryRight={
              <ArrowIOSForwardIcon style={{ width: 20, height: 20 }} />
            }
            onPress={() => setEditFieldName('title')}
            onLongPress={() => handleClipboard(accountInfo.title)}
          />
          <AccountSettingItem
            label={t('keyList.setting.account')}
            text={accountInfo.account}
            accessoryRight={
              <ArrowIOSForwardIcon style={{ width: 20, height: 20 }} />
            }
            onPress={() => setEditFieldName('account')}
            onLongPress={() => handleClipboard(accountInfo.account)}
          />
          <AccountSettingItem
            label={t('keyList.setting.password')}
            text={accountInfo.password}
            accessoryRight={
              <ArrowIOSForwardIcon style={{ width: 20, height: 20 }} />
            }
            onPress={() => setEditFieldName('password')}
            onLongPress={() => handleClipboard(accountInfo.password)}
          />
          <AccountSettingItem
            label={t('keyList.setting.phone')}
            text={accountInfo.phone}
            placeholder={t('improveInfo')}
            accessoryRight={
              <ArrowIOSForwardIcon style={{ width: 20, height: 20 }} />
            }
            onPress={() => setEditFieldName('phone')}
            onLongPress={() => {
              if (accountInfo.phone) handleClipboard(accountInfo.phone);
            }}
          />
          <AccountSettingItem
            label={t('keyList.setting.email')}
            text={accountInfo.email}
            placeholder={t('improveInfo')}
            accessoryRight={
              <ArrowIOSForwardIcon style={{ width: 20, height: 20 }} />
            }
            onPress={() => setEditFieldName('email')}
            onLongPress={() => {
              if (accountInfo.email) handleClipboard(accountInfo.email);
            }}
          />
          <AccountSettingItem
            label={t('keyList.setting.remark')}
            placeholder={t('improveInfo')}
            text={accountInfo.remark}
            accessoryRight={
              <ArrowIOSForwardIcon style={{ width: 20, height: 20 }} />
            }
            onPress={() => setEditFieldName('remark')}
            onLongPress={() => {
              if (accountInfo.remark) handleClipboard(accountInfo.remark);
            }}
          />
          <AccountSettingItem
            label={t('keyList.setting.weChat')}
            placeholder={t('improveInfo')}
            text={accountInfo.weChat}
            accessoryRight={
              <ArrowIOSForwardIcon style={{ width: 20, height: 20 }} />
            }
            onPress={() => setEditFieldName('weChat')}
            onLongPress={() => {
              if (accountInfo.weChat) handleClipboard(accountInfo.weChat);
            }}
          />
          <AccountSettingItem
            label={t('keyList.setting.qq')}
            placeholder={t('improveInfo')}
            text={accountInfo.qq}
            accessoryRight={
              <ArrowIOSForwardIcon style={{ width: 20, height: 20 }} />
            }
            onPress={() => setEditFieldName('qq')}
            onLongPress={() => {
              if (accountInfo.qq) handleClipboard(accountInfo.qq);
            }}
          />
        </View>
        <View>
          <Button status="danger" onPress={() => setOpenDelDrawer(true)}>
            {t('deleteBtnText')}
          </Button>
        </View>
        <AccountEditDrawer
          fieldName={editFieldName}
          initialFieldValue={
            editFieldName ? accountInfo[editFieldName] : undefined
          }
          open={!!editFieldName}
          onClose={handleOnCloseEdit}
          onSave={(fieldName, value) =>
            onSubmit({ ...accountInfo, [fieldName]: value })
          }
        />
        <Drawer
          placement="bottom"
          open={openDelDrawer}
          onClose={() => setOpenDelDrawer(false)}
          style={themedStyles.delDrawer}
        >
          <ListGroup
            items={[
              {
                key: 'delete',
                items: [
                  {
                    key: 'deleteBtn',
                    title: (evaProps) => (
                      <Text
                        {...evaProps}
                        status="danger"
                        style={{ textAlign: 'center' }}
                      >{`${t('confirm')}${t('deleteBtnText')}`}</Text>
                    ),
                    onPress: () => onDeleteRecord(routeParams.account.id),
                  },
                  {
                    key: 'cancelBtn',
                    title: (evaProps) => (
                      <Text {...evaProps} style={{ textAlign: 'center' }}>
                        {t('cancelBtnText')}
                      </Text>
                    ),
                    onPress: () => setOpenDelDrawer(false),
                  },
                ],
              },
            ]}
          />
        </Drawer>
      </View>
    </ScreenView>
  );
}

const styles = StyleService.create({
  container: {
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    flex: 1,
  },
  delDrawer: {
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});

export default AccountSetting;
