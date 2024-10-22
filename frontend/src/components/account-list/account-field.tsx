import { Input, InputProps } from '@ui-kitten/components';
import { ForwardedRef, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

export const AccountTitle = forwardRef(
  (props: InputProps, ref?: ForwardedRef<Input>) => {
    const { t } = useTranslation(['common']);
    return (
      <Input
        {...props}
        ref={ref}
        placeholder={t('inputPlaceholder')}
        size={props.size ?? 'medium'}
      />
    );
  },
);

export const AccountName = forwardRef(
  (props: InputProps, ref?: ForwardedRef<Input>) => {
    const { t } = useTranslation(['common']);
    return (
      <Input
        {...props}
        ref={ref}
        placeholder={t('inputPlaceholder')}
        size={props.size ?? 'medium'}
      />
    );
  },
);

export const AccountPassword = forwardRef(
  (props: InputProps, ref?: ForwardedRef<Input>) => {
    const { t } = useTranslation(['common']);
    return (
      <Input
        {...props}
        ref={ref}
        placeholder={t('inputPlaceholder')}
        size={props.size ?? 'medium'}
      />
    );
  },
);

export const AccountRemark = forwardRef(
  (props: InputProps, ref?: ForwardedRef<Input>) => {
    const { t } = useTranslation(['common']);
    return (
      <Input
        {...props}
        ref={ref}
        textStyle={{
          minHeight: 64,
        }}
        placeholder={t('inputPlaceholder')}
        size={props.size ?? 'medium'}
        multiline={true}
      />
    );
  },
);

export const AccountEmail = forwardRef(
  (props: InputProps, ref?: ForwardedRef<Input>) => {
    const { t } = useTranslation(['common']);
    return (
      <Input
        {...props}
        ref={ref}
        label={props.label}
        placeholder={t('inputPlaceholder')}
        size={props.size ?? 'medium'}
      />
    );
  },
);

export const AccountPhone = forwardRef(
  (props: InputProps, ref?: ForwardedRef<Input>) => {
    const { t } = useTranslation(['common']);
    return (
      <Input
        {...props}
        ref={ref}
        placeholder={t('inputPlaceholder')}
        size={props.size ?? 'medium'}
      />
    );
  },
);

export const AccountQQ = forwardRef(
  (props: InputProps, ref?: ForwardedRef<Input>) => {
    const { t } = useTranslation(['common']);
    return (
      <Input
        {...props}
        ref={ref}
        placeholder={t('inputPlaceholder')}
        size={props.size ?? 'medium'}
      />
    );
  },
);

export const AccountWeChat = forwardRef(
  (props: InputProps, ref?: ForwardedRef<Input>) => {
    const { t } = useTranslation(['common']);
    return (
      <Input
        {...props}
        ref={ref}
        placeholder={t('inputPlaceholder')}
        size={props.size ?? 'medium'}
      />
    );
  },
);
