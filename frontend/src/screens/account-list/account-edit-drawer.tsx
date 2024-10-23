import {
  AccountEmail,
  AccountName,
  AccountPassword,
  AccountPhone,
  AccountQQ,
  AccountRemark,
  AccountTitle,
  AccountWeChat,
} from '@/components/account-list/account-field';
import Drawer from '@/components/drawer/drawer';
import ScreenTopNavigation from '@/components/screen-top-navigation/screen-top-navigation';
import { Account } from '@/types/schemas/account';
import {
  Button,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

type FieldName = keyof Omit<Account, 'id' | 'createTime' | 'updateTime'>;

type Props = {
  fieldName: FieldName | undefined;
  initialFieldValue: Account[keyof Account];
  open: boolean;
  onClose: () => void;
  onSave: (fieldName: FieldName, value: Account[FieldName]) => void;
};
function AccountEditDrawer(props: Props) {
  const { open, initialFieldValue, fieldName, onClose, onSave } = props;
  const { t } = useTranslation(['common']);
  const styles = useStyleSheet(themedStyles);
  const [value, setValue] =
    useState<Props['initialFieldValue']>(initialFieldValue);

  const title = fieldName
    ? `${t('common:edit')}${t(`keyList.setting.${fieldName}`)}`
    : t('common:edit');

  const getContent = (fieldName: Props['fieldName']) => {
    switch (fieldName) {
      case 'title':
        return <AccountTitle value={value} onChangeText={setValue} />;
      case 'account':
        return <AccountName value={value} onChangeText={setValue} />;
      case 'password':
        return <AccountPassword value={value} onChangeText={setValue} />;
      case 'remark':
        return <AccountRemark value={value} onChangeText={setValue} />;
      case 'email':
        return <AccountEmail value={value} onChangeText={setValue} />;
      case 'phone':
        return <AccountPhone value={value} onChangeText={setValue} />;
      case 'qq':
        return <AccountQQ value={value} onChangeText={setValue} />;
      case 'weChat':
        return <AccountWeChat value={value} onChangeText={setValue} />;
      default:
        return (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text appearance="hint">{t('unknownError')}</Text>
          </View>
        );
    }
  };

  const handleOnSave = () => {
    if (fieldName) onSave(fieldName, value);
  };

  useEffect(() => {
    setValue(initialFieldValue);
  }, [initialFieldValue]);

  return (
    <Drawer
      placement="bottom"
      style={styles.container}
      open={open}
      onClose={onClose}
    >
      <ScreenTopNavigation
        title={title}
        style={{ backgroundColor: 'transparent' }}
        alignment="center"
        accessoryLeft={() => (
          <Button status="basic" onPress={onClose} appearance="ghost">
            {t('cancelBtnText')}
          </Button>
        )}
        accessoryRight={() => (
          <Button onPress={handleOnSave} appearance="ghost">
            {t('saveBtnText')}
          </Button>
        )}
      />
      {getContent(fieldName)}
    </Drawer>
  );
}

const themedStyles = StyleService.create({
  container: {
    height: '70%',
  },
});

export default AccountEditDrawer;
