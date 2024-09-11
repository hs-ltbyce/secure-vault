import { Account as AccountInfo } from '@/types/schemas/account';
import { Card, Text } from '@ui-kitten/components';
import { View } from 'react-native';

function Account(props: { account: AccountInfo }) {
  const { account } = props;
  return (
    <View>
      <Card>
        <Text category="h6">{account.title}</Text>
        {account.note ? <Text category="s1">{account.note}</Text> : null}
      </Card>
    </View>
  );
}

export default Account;
