import Drawer from '@/components/drawer/drawer';
import ScreenTopNavigation from '@/components/screen-top-navigation/screen-top-navigation';
import { Account } from '@/types/schemas/account';
import {
  Button,
  Input,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

type Props = {
  open: boolean;
  onClose: () => void;
};

function AccountAdvanceSetting(props: Props) {
  const { open, onClose } = props;
  const { t } = useTranslation(['common']);
  const styles = useStyleSheet(themedStyles);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Account>();

  const onSubmit = (data: Account) => {
    console.log(data);
  };

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
          <Button onPress={onClose} appearance="ghost">
            {t('cancelBtnText')}
          </Button>
        )}
        accessoryRight={() => (
          <Button appearance="ghost">{t('saveBtnText')}</Button>
        )}
      />
      <View style={styles.formContainer}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              value={value}
              size="medium"
              label={t('keyList.setting.email')}
              placeholder={t('inputPlaceholder')}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              value={value}
              size="medium"
              label={t('keyList.setting.phone')}
              placeholder={t('inputPlaceholder')}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        <Controller
          control={control}
          name="weChat"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              value={value}
              size="medium"
              label={t('keyList.setting.weChat')}
              placeholder={t('inputPlaceholder')}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        <Controller
          control={control}
          name="qq"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              value={value}
              size="medium"
              label={t('keyList.setting.qq')}
              placeholder={t('inputPlaceholder')}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
      </View>
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
  formContainer: {
    gap: 12,
  },
});

export default AccountAdvanceSetting;
