import Account from '@/components/account-list/account';
import Empty from '@/components/common/empty';
import { MenuIcon, PlusIcon } from '@/components/icons/icons';
import { mockAccountList } from '@/data/mock/account';
import { Account as AccountInfo } from '@/types/schemas/account';
import { Text, useTheme } from '@ui-kitten/components';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';

function AccountList() {
  const [accountList, setAccountList] = useState<AccountInfo[]>([]);
  const theme = useTheme();

  useEffect(() => {
    setAccountList(mockAccountList(20));
  }, []);

  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignContent: 'center',
            backgroundColor: theme.background,
            padding: 16,
          }}
        >
          <MenuIcon height={28} style={{ width: 60 }} />
          <Text category="h6" style={{ width: 60 }}>
            列表
          </Text>
          <PlusIcon height={28} style={{ width: 60 }} />
        </View>
        <FlatList
          data={accountList}
          renderItem={({ item }) => <Account account={item} />}
          ListEmptyComponent={<Empty />}
        />
      </View>
    </SafeAreaView>
  );
}

export default AccountList;
