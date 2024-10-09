import Drawer from '@/components/drawer/drawer';
import ScreenTopNavigation from '@/components/screen-top-navigation/screen-top-navigation';
import { Button, StyleService, useStyleSheet } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';

type Props = {
  open: boolean;
  onClose: () => void;
};

function AccountAdvanceSetting(props: Props) {
  const { open, onClose } = props;
  const { t } = useTranslation(['common']);
  const styles = useStyleSheet(themedStyles);

  return (
    <Drawer
      style={styles.container}
      open={open}
      onClose={onClose}
      placement="bottom"
    >
      <ScreenTopNavigation
        style={{ backgroundColor: 'transparent' }}
        title={t('keyList.setting.advanceTitle')}
        alignment="center"
        accessoryLeft={() => (
          <Button appearance="ghost">{t('cancelBtnText')}</Button>
        )}
        accessoryRight={() => (
          <Button appearance="ghost">{t('saveBtnText')}</Button>
        )}
      />
    </Drawer>
  );
}

const themedStyles = StyleService.create({
  container: {
    backgroundColor: 'background-basic-color-1',
    height: '70%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});

export default AccountAdvanceSetting;
