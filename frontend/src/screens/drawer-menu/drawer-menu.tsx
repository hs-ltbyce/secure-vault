import Drawer from '@/components/drawer/drawer';
import { SettingIcon } from '@/components/icons/icons';
import { RootStackParamList } from '@/types/navigation';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  Menu,
  MenuItem,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';
import { useMMKVBoolean } from 'react-native-mmkv';

function DrawerMenu() {
  const { t } = useTranslation('common');
  const styles = useStyleSheet(themedStyles);

  const [open, setOpen] = useMMKVBoolean('drawerMenu.open');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <Drawer style={styles.container} open={open} onClose={() => setOpen(false)}>
      <Menu style={styles.menu} onSelect={() => setOpen(false)}>
        <MenuItem
          title={t('setting.title')}
          accessoryLeft={SettingIcon}
          onPress={() => navigation.navigate('Setting')}
        />
      </Menu>
    </Drawer>
  );
}

const themedStyles = StyleService.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    width: '60%',
    backgroundColor: 'background-basic-color-1',
  },
  menu: {
    flex: 1,
    backgroundColor: 'background-basic-color-1',
  },
});

export default DrawerMenu;
