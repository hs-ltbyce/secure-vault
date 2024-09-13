import { Account as AccountInfo } from '@/types/schemas/account';
import { Card, Text } from '@ui-kitten/components';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

function Account(props: {
  account: AccountInfo;
  style?: StyleProp<ViewStyle>;
}) {
  const { account, style } = props;
  return (
    <View style={style}>
      <Card>
        <Text category="h6" style={styles.title}>
          {account.title}
        </Text>
        {account.note ? (
          <Text numberOfLines={1} ellipsizeMode="tail" category="c1">
            {account.note}
          </Text>
        ) : null}
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 4,
  },
});

export default Account;
