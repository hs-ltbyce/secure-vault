import {
  ArrowIOSBackIcon,
  EyeIcon,
  EyeOffIcon,
  SettingIcon,
} from '@/components/icons/icons';
import ScreenTopNavigation from '@/components/screen-top-navigation/screen-top-navigation';
import ScreenView from '@/theme/screen-view';
import { RootStackParamList } from '@/types/navigation';
import { Account } from '@/types/schemas/account';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  Button,
  IconProps,
  Input,
  TopNavigationAction,
} from '@ui-kitten/components';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import AccountAdvanceSetting from './acc-adv-set';

function AccountSetting() {
  const { t } = useTranslation(['common']);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [open, setOpen] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Account>();

  const renderIcon = (props: IconProps): React.ReactElement => (
    <TouchableWithoutFeedback onPress={() => setSecureTextEntry((s) => !s)}>
      {secureTextEntry ? <EyeOffIcon {...props} /> : <EyeIcon {...props} />}
    </TouchableWithoutFeedback>
  );

  const onSubmit = (data: Account) => {
    console.log(data);
  };

  return (
    <ScreenView>
      <ScreenTopNavigation
        title={t('keyList.setting.title')}
        alignment="center"
        accessoryLeft={() => (
          <TopNavigationAction
            icon={ArrowIOSBackIcon}
            onPress={() => navigation.goBack()}
          />
        )}
        accessoryRight={() => (
          <TopNavigationAction
            icon={SettingIcon}
            onPress={() => setOpen(true)}
          />
        )}
      />
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Controller
            control={control}
            name="title"
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                value={value}
                size="medium"
                label={t('keyList.setting.accountTitle')}
                placeholder={t('inputPlaceholder')}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
          <Controller
            control={control}
            name="account"
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                value={value}
                size="medium"
                label={t('keyList.setting.account')}
                placeholder={t('inputPlaceholder')}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                value={value}
                size="medium"
                label={t('keyList.setting.password')}
                placeholder={t('inputPlaceholder')}
                accessoryRight={renderIcon}
                secureTextEntry={secureTextEntry}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
          <Controller
            control={control}
            name="remark"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                textStyle={styles.textArea}
                value={value}
                size="medium"
                label={t('keyList.setting.remark')}
                placeholder={t('inputPlaceholder')}
                onChangeText={onChange}
                onBlur={onBlur}
                multiline={true}
              />
            )}
          />
        </View>
        <Button onPress={handleSubmit(onSubmit)}>{t('saveBtnText')}</Button>
      </View>
      <AccountAdvanceSetting open={open} onClose={() => setOpen(false)} />
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    flex: 1,
  },
  formContainer: {
    gap: 12,
  },
  textArea: {
    minHeight: 64,
  },
});

export default AccountSetting;
