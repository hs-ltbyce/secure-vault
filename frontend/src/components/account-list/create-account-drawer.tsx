import { Account } from '@/types/schemas/account';
import { Button, ViewPager } from '@ui-kitten/components';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Drawer from '../drawer/drawer';
import ScreenTopNavigation from '../screen-top-navigation/screen-top-navigation';
import { AccountName, AccountPassword, AccountTitle } from './account-field';

type Props = {
  open: boolean;
  style?: ViewStyle | undefined;
  onClose: () => void;
  onSave: (account: Pick<Account, 'account' | 'password' | 'title'>) => void;
};
function CreateAccountDrawer(props: Props) {
  const { open, style, onClose, onSave } = props;

  const { t } = useTranslation(['common']);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [title, setTitle] = useState<Account['title']>('');
  const [accountName, setAccountName] = useState<Account['account']>('');
  const [password, setPassword] = useState<Account['password']>('');

  const resetState = () => {
    setSelectedIndex(0);
    setTitle('');
    setAccountName('');
    setPassword('');
  };

  useEffect(() => {
    if (open) resetState();
  }, [open]);

  return (
    <Drawer
      style={{ ...style, ...styles.container }}
      open={open}
      onClose={onClose}
      placement="bottom"
    >
      <ScreenTopNavigation
        style={{ backgroundColor: 'transparent' }}
        title={t('keyList.setting.title')}
        alignment="center"
        accessoryLeft={() =>
          selectedIndex === 0 ? (
            <Button status="basic" onPress={onClose} appearance="ghost">
              {t('cancelBtnText')}
            </Button>
          ) : (
            <Button
              onPress={() => setSelectedIndex((s) => s - 1)}
              appearance="ghost"
            >
              {t('prevStep')}
            </Button>
          )
        }
        accessoryRight={() =>
          selectedIndex === 2 ? (
            <Button
              onPress={() =>
                onSave({
                  title,
                  account: accountName,
                  password,
                })
              }
              appearance="ghost"
            >
              {t('saveBtnText')}
            </Button>
          ) : (
            <Button
              onPress={() => setSelectedIndex((s) => s + 1)}
              appearance="ghost"
            >
              {t('nextStep')}
            </Button>
          )
        }
      />
      <ViewPager
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
        style={styles.tabContainer}
      >
        <View>
          <AccountTitle
            value={title}
            setValue={(nextTitle) => setTitle(nextTitle)}
          />
        </View>
        <View>
          <AccountName
            value={accountName}
            setValue={(nextName) => setAccountName(nextName)}
          />
        </View>
        <View>
          <AccountPassword
            value={password}
            setValue={(nextPassword) => setPassword(nextPassword)}
          />
        </View>
      </ViewPager>
    </Drawer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  tabContainer: {
    flex: 1,
    paddingHorizontal: 12,
    gap: 24,
  },
});

export default CreateAccountDrawer;
