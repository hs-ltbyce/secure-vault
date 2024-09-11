import { ReactNode } from 'react';
import { Text, View } from 'react-native';

function Empty(props: { description?: ReactNode }) {
  return (
    <View>
      <Text>{props.description ?? '暂无数据'}</Text>
    </View>
  );
}

export default Empty;
