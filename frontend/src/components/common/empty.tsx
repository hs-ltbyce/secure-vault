import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { EmptyIcon } from '../icons/icons';

function Empty(props: { description?: ReactNode }) {
  const { t } = useTranslation(['common']);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <EmptyIcon />
      <Text>{props.description ?? t('common:empty')}</Text>
    </View>
  );
}

export default Empty;
