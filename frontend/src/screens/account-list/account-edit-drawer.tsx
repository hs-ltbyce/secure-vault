import {
  AccountName,
  AccountPassword,
  AccountRemark,
  AccountTitle,
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

type Props = {
  fieldName: keyof Account | undefined;
  initialFieldValue: Account[keyof Account];
  open: boolean;
  onClose: () => void;
  onSave: (fieldName: keyof Account, value: Account[keyof Account]) => void;
};
function AccountEditDrawer(props: Props) {
  const { open, initialFieldValue, fieldName, onClose, onSave } = props;
  const { t } = useTranslation(['common']);
  const styles = useStyleSheet(themedStyles);
  const [value, setValue] =
    useState<Props['initialFieldValue']>(initialFieldValue);

  const getContent = (fieldName: Props['fieldName']) => {
    switch (fieldName) {
      case 'title':
        return <AccountTitle value={value} setValue={setValue} />;
      case 'account':
        return <AccountName value={value} setValue={setValue} />;
      case 'password':
        return <AccountPassword value={value} setValue={setValue} />;
      case 'remark':
        return <AccountRemark value={value} setValue={setValue} />;
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
        title={`${t('common:edit')}`}
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
    backgroundColor: 'background-basic-color-1',
    height: '70%',
  },
});

export default AccountEditDrawer;
