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

type Props = {
  open: boolean;
  onClose: () => void;
};

function DrawerMenu(props: Props) {
  const { open, onClose } = props;

  const { t } = useTranslation('common');
  const styles = useStyleSheet(themedStyles);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <Drawer style={styles.container} open={open} onClose={onClose}>
      <Menu style={styles.menu} onSelect={onClose}>
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
  container: {
    width: '60%',
  },
  menu: {
    flex: 1,
    backgroundColor: 'background-basic-color-1',
  },
});

export default DrawerMenu;
