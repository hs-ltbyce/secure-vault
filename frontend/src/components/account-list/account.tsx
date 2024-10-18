import { Account as AccountInfo } from '@/types/schemas/account';
import { Card, Text } from '@ui-kitten/components';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

function Account(props: {
  account: AccountInfo;
  onPress?: (account: AccountInfo, e: GestureResponderEvent) => void;
  onLongPress?: () => void;
  style?: StyleProp<ViewStyle>;
}) {
  const { account, style, onPress, onLongPress } = props;
  return (
    <Card
      onLongPress={onLongPress}
      onPress={(e) => onPress?.(account, e)}
      style={style}
    >
      <Text category="h6" style={styles.title}>
        {account.title}
      </Text>
      {account.remark ? (
        <Text numberOfLines={1} ellipsizeMode="tail" appearance="hint">
          {account.remark}
        </Text>
      ) : null}
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 4,
  },
});

export default Account;
