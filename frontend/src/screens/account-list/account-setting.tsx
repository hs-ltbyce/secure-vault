import {
  ArrowIOSBackIcon,
  EyeIcon,
  EyeOffIcon,
  SettingIcon,
} from '@/components/icons/icons';
import ScreenTopNavigation from '@/components/screen-top-navigation/screen-top-navigation';
import ScreenView from '@/theme/screen-view';
import { NavigationParams, RootStackParamList } from '@/types/navigation';
import { Account } from '@/types/schemas/account';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  Button,
  IconProps,
  Input,
  TopNavigationAction,
} from '@ui-kitten/components';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { useMMKVString } from 'react-native-mmkv';
import uuid from 'react-native-uuid';
import AccountAdvanceSetting from './acc-adv-set';

function AccountSetting() {
  const { t } = useTranslation(['common']);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { params: routeParams } =
    useRoute<NavigationParams<'AccountSetting'>>();
  const [, setAccountList] = useMMKVString('accountList');
  const [open, setOpen] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Account>({
    defaultValues: routeParams?.account || {},
  });

  const renderIcon = (props: IconProps): React.ReactElement => (
    <TouchableWithoutFeedback onPress={() => setSecureTextEntry((s) => !s)}>
      {secureTextEntry ? <EyeOffIcon {...props} /> : <EyeIcon {...props} />}
    </TouchableWithoutFeedback>
  );

  const addRecord = (data: Account) => {
    setAccountList((current = '[]') => {
      const dataList = JSON.parse(current);
      dataList.push({
        ...data,
        id: uuid.v4(),
      });
      return JSON.stringify(dataList);
    });
  };

  const updateRecord = (data: Account) => {
    setAccountList((current = '[]') => {
      const dataList = JSON.parse(current).map((m: Account) => {
        if (m.id === data.id) return data;
        return m;
      });
      return JSON.stringify(dataList);
    });
  };

  const onDeleteRecord = (id: string) => {
    setAccountList((current = '[]') => {
      const dataList = JSON.parse(current).filter((f: Account) => f.id !== id);
      return JSON.stringify(dataList);
    });
    navigation.goBack();
  };

  const onSubmit = (data: Account) => {
    if (data.id) {
      updateRecord(data);
    } else {
      addRecord(data);
    }
    navigation.goBack();
  };

  useEffect(() => {
    if (routeParams?.account) reset(routeParams.account);
  }, [routeParams?.account, reset]);

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
        <View style={styles.bottomBtnGroup}>
          <Button onPress={handleSubmit(onSubmit)}>{t('saveBtnText')}</Button>
          {routeParams?.account.id && (
            <Button
              status="danger"
              onPress={() => onDeleteRecord(routeParams.account.id)}
            >
              {t('deleteBtnText')}
            </Button>
          )}
        </View>
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
  bottomBtnGroup: {
    gap: 10,
  },
});

export default AccountSetting;
