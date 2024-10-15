import { Input, InputProps } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

export function AccountTitle(props: {
  value: string | undefined;
  setValue: (text: string) => void;
  label?: InputProps['label'];
  size?: 'small' | 'medium' | 'large';
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}) {
  const { t } = useTranslation(['common']);
  return (
    <Input
      label={props.label}
      placeholder={t('inputPlaceholder')}
      value={props.value}
      size={props.size ?? 'medium'}
      onChangeText={(nextValue) => props.setValue(nextValue)}
      onBlur={props.onBlur}
    />
  );
}

export function AccountName(props: {
  value: string | undefined;
  setValue: (text: string) => void;
  size?: 'small' | 'medium' | 'large';
  label?: InputProps['label'];
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}) {
  const { t } = useTranslation(['common']);
  return (
    <Input
      label={props.label}
      placeholder={t('inputPlaceholder')}
      value={props.value}
      size={props.size ?? 'medium'}
      onChangeText={(nextValue) => props.setValue(nextValue)}
      onBlur={props.onBlur}
    />
  );
}

export function AccountPassword(props: {
  value: string | undefined;
  setValue: (text: string) => void;
  size?: 'small' | 'medium' | 'large';
  label?: InputProps['label'];
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}) {
  const { t } = useTranslation(['common']);
  return (
    <Input
      label={props.label}
      placeholder={t('inputPlaceholder')}
      value={props.value}
      size={props.size ?? 'medium'}
      onChangeText={(nextValue) => props.setValue(nextValue)}
      onBlur={props.onBlur}
    />
  );
}

export function AccountRemark(props: {
  value: string | undefined;
  setValue: (text: string) => void;
  size?: 'small' | 'medium' | 'large';
  label?: InputProps['label'];
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}) {
  const { t } = useTranslation(['common']);
  return (
    <Input
      label={props.label}
      textStyle={{
        minHeight: 64,
      }}
      value={props.value}
      placeholder={t('inputPlaceholder')}
      size={props.size ?? 'medium'}
      onChangeText={(nextValue) => props.setValue(nextValue)}
      onBlur={props.onBlur}
      multiline={true}
    />
  );
}
