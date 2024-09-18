import Drawer from '@/components/drawer/drawer';
import { SettingIcon } from '@/components/icons/icons';
import { Menu, MenuItem } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { useMMKVBoolean } from 'react-native-mmkv';

function DrawerMenu() {
  const [open, setOpen] = useMMKVBoolean('drawerMenu.open');

  return (
    <Drawer style={styles.container} open={open} onClose={() => setOpen(false)}>
      <Menu style={styles.menu}>
        <MenuItem title="Users" />
        <MenuItem title="Orders" />
        <MenuItem title="Transactions" />
        <MenuItem title="Settings" accessoryLeft={SettingIcon} />
      </Menu>
    </Drawer>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    width: '60%',
  },
  menu: {
    top: 40,
    flex: 1,
    backgroundColor: 'white',
  },
});

export default DrawerMenu;
