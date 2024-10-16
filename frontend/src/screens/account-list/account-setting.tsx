import AccountSettingItem from '@/components/account-list/account-setting-item';
import {
  ArrowIOSBackIcon,
  ArrowIOSForwardIcon,
} from '@/components/icons/icons';
import ScreenTopNavigation from '@/components/screen-top-navigation/screen-top-navigation';
import { useTheme } from '@/theme';
import ScreenView from '@/theme/screen-view';
import { NavigationParams, RootStackParamList } from '@/types/navigation';
import { Account } from '@/types/schemas/account';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, TopNavigationAction } from '@ui-kitten/components';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { useMMKVString } from 'react-native-mmkv';
import uuid from 'react-native-uuid';
import AccountEditDrawer from './account-edit-drawer';

function AccountSetting() {
  const { token } = useTheme();
  const { t } = useTranslation(['common']);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { params: routeParams } =
    useRoute<NavigationParams<'AccountSetting'>>();
  const { account: accountData } = routeParams;
  const [, setAccountList] = useMMKVString('accountList');
  const [editFieldName, setEditFieldName] = useState<keyof Account>();

  const addRecord = (data: Account) => {
    setAccountList((current = '[]') => {
      const dataList = JSON.parse(current);
      dataList.push({
        ...data,
        id: uuid.v4(),
      });
      return JSON.stringify(dataList);
    });
  };

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
    navigation.goBack();
  };

  const onSubmit = (data: Account) => {
    if (data.id) {
      updateRecord(data);
    } else {
      addRecord(data);
    }
    navigation.goBack();
  };

  return (
    <ScreenView style={{ backgroundColor: token['background-basic-color-1'] }}>
      <ScreenTopNavigation
        style={{ backgroundColor: 'transparent' }}
        title={t('keyList.setting.title')}
        alignment="center"
        accessoryLeft={() => (
          <TopNavigationAction
            icon={ArrowIOSBackIcon}
            onPress={() => navigation.goBack()}
          />
        )}
      />
      <View style={styles.container}>
        <View>
          <AccountSettingItem
            label={t('keyList.setting.accountTitle')}
            text={accountData.title}
            accessoryRight={
              <ArrowIOSForwardIcon style={{ width: 20, height: 20 }} />
            }
            onPress={() => setEditFieldName('title')}
          />
          <AccountSettingItem
            label={t('keyList.setting.account')}
            text={accountData.account}
            accessoryRight={
              <ArrowIOSForwardIcon style={{ width: 20, height: 20 }} />
            }
            onPress={() => setEditFieldName('account')}
          />
          <AccountSettingItem
            label={t('keyList.setting.password')}
            text={accountData.password}
            accessoryRight={
              <ArrowIOSForwardIcon style={{ width: 20, height: 20 }} />
            }
            onPress={() => setEditFieldName('password')}
          />
          <AccountSettingItem
            label={t('keyList.setting.phone')}
            text={accountData.phone}
            placeholder={t('improveInfo')}
            accessoryRight={
              <ArrowIOSForwardIcon style={{ width: 20, height: 20 }} />
            }
            onPress={() => setEditFieldName('phone')}
          />
          <AccountSettingItem
            label={t('keyList.setting.email')}
            text={accountData.email}
            placeholder={t('improveInfo')}
            accessoryRight={
              <ArrowIOSForwardIcon style={{ width: 20, height: 20 }} />
            }
            onPress={() => setEditFieldName('email')}
          />
          <AccountSettingItem
            label={t('keyList.setting.remark')}
            placeholder={t('improveInfo')}
            text={accountData.remark}
            accessoryRight={
              <ArrowIOSForwardIcon style={{ width: 20, height: 20 }} />
            }
            onPress={() => setEditFieldName('remark')}
          />
          <AccountSettingItem
            label={t('keyList.setting.weChat')}
            placeholder={t('improveInfo')}
            text={accountData.weChat}
            accessoryRight={
              <ArrowIOSForwardIcon style={{ width: 20, height: 20 }} />
            }
            onPress={() => setEditFieldName('weChat')}
          />
          <AccountSettingItem
            label={t('keyList.setting.qq')}
            placeholder={t('improveInfo')}
            text={accountData.qq}
            accessoryRight={
              <ArrowIOSForwardIcon style={{ width: 20, height: 20 }} />
            }
            onPress={() => setEditFieldName('qq')}
          />
        </View>
        <View>
          <Button
            status="danger"
            onPress={() => onDeleteRecord(routeParams.account.id)}
          >
            {t('deleteBtnText')}
          </Button>
        </View>
        <AccountEditDrawer
          fileName={editFieldName}
          initialFileValue={
            editFieldName ? accountData[editFieldName] : undefined
          }
          open={!!editFieldName}
          onClose={() => setEditFieldName(undefined)}
        />
      </View>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    flex: 1,
  },
});

export default AccountSetting;
