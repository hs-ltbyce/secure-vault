import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';

function Footer(props: { text?: ReactNode }) {
  const { t } = useTranslation(['common']);
  return (
    <Text
      style={{ textAlign: 'center' }}
      numberOfLines={1}
      ellipsizeMode="tail"
    >
      {props.text ?? t('appNameDesc')}
    </Text>
  );
}

export default Footer;
