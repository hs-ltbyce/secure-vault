import { Account } from '@/types/schemas/account';
import { Button, Input, ViewPager } from '@ui-kitten/components';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
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
  const titleRef = useRef<Input>(null);
  const nameRef = useRef<Input>(null);
  const passwordRef = useRef<Input>(null);

  const disableRight = useMemo(() => {
    if (selectedIndex === 0) return title.trim().length == 0;
    if (selectedIndex === 1) return accountName.trim().length == 0;
    return password.trim().length == 0;
  }, [selectedIndex, title, accountName, password]);

  const handleClickRight = (selectedIndex: number) => {
    if (selectedIndex === 2) {
      onSave({
        title,
        account: accountName,
        password,
      });
    } else {
      setSelectedIndex((s) => s + 1);
    }
  };

  const resetState = () => {
    setSelectedIndex(0);
    setTitle('');
    setAccountName('');
    setPassword('');
  };

  useEffect(() => {
    if (!open) return;
    if (selectedIndex === 0 && titleRef.current) {
      titleRef.current.focus();
    } else if (selectedIndex === 1 && nameRef.current) {
      nameRef.current.focus();
    } else if (selectedIndex === 2 && passwordRef.current) {
      passwordRef.current.focus();
    }
  }, [selectedIndex, open]);

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
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={{ flex: 1 }}>
          <ScreenTopNavigation
            style={{ backgroundColor: 'transparent' }}
            title={t('keyList.setting.create')}
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
            accessoryRight={() => (
              <Button
                onPress={() => handleClickRight(selectedIndex)}
                appearance="ghost"
                disabled={disableRight}
              >
                {selectedIndex === 2 ? t('saveBtnText') : t('nextStep')}
              </Button>
            )}
          />
          <ViewPager
            selectedIndex={selectedIndex}
            onSelect={(index) => setSelectedIndex(index)}
            style={styles.tabContainer}
          >
            <View>
              <AccountTitle
                value={title}
                onChangeText={(nextTitle) => setTitle(nextTitle)}
                label={t('common:keyList.setting.title')}
                ref={titleRef}
              />
            </View>
            <View>
              <AccountName
                value={accountName}
                onChangeText={(nextName) => setAccountName(nextName)}
                label={t('common:keyList.setting.account')}
                ref={nameRef}
              />
            </View>
            <View>
              <AccountPassword
                value={password}
                onChangeText={(nextPassword) => setPassword(nextPassword)}
                label={t('common:keyList.setting.password')}
                ref={passwordRef}
              />
            </View>
          </ViewPager>
        </View>
      </TouchableWithoutFeedback>
    </Drawer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  tabContainer: {
    paddingHorizontal: 12,
    gap: 24,
  },
});

export default CreateAccountDrawer;
