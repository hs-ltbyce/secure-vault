import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { EmptyIcon } from '../icons/icons';

interface Props {
  description?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

function Empty(props: Props) {
  const { t } = useTranslation(['common']);
  return (
    <View
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 40,
        },
        props.style,
      ]}
    >
      <EmptyIcon />
      <Text>{props.description ?? t('common:empty')}</Text>
    </View>
  );
}

export default Empty;

