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
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

type Props = {
  fileName: keyof Account | undefined;
  initialFileValue: Account[keyof Account];
  open: boolean;
  onClose: () => void;
};
function AccountEditDrawer(props: Props) {
  const { open, initialFileValue, fileName, onClose } = props;
  const { t } = useTranslation(['common']);
  const styles = useStyleSheet(themedStyles);
  const [fileValue, setFileValue] =
    useState<Props['initialFileValue']>(initialFileValue);

  const getContent = (fileName: Props['fileName']) => {
    switch (fileName) {
      case 'title':
        return <AccountTitle value={fileValue} setValue={setFileValue} />;
      case 'account':
        return <AccountName value={fileValue} setValue={setFileValue} />;
      case 'password':
        return <AccountPassword value={fileValue} setValue={setFileValue} />;
      case 'remark':
        return <AccountRemark value={fileValue} setValue={setFileValue} />;
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

  return (
    <Drawer
      placement="bottom"
      style={styles.container}
      open={open}
      onClose={onClose}
    >
      <ScreenTopNavigation
        style={{ backgroundColor: 'transparent' }}
        alignment="center"
        accessoryLeft={() => (
          <Button status="basic" onPress={onClose} appearance="ghost">
            {t('cancelBtnText')}
          </Button>
        )}
        accessoryRight={() => (
          <Button appearance="ghost">{t('saveBtnText')}</Button>
        )}
      />
      {getContent(fileName)}
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
