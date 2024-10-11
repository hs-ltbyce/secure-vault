import Account from '@/components/account-list/account';
import Empty from '@/components/common/empty';
import { MenuIcon, PlusIcon } from '@/components/icons/icons';
import ScreenTopNavigation from '@/components/screen-top-navigation/screen-top-navigation';
import { mockAccountList } from '@/data/mock/account';
import ScreenView from '@/theme/screen-view';
import { RootStackParamList } from '@/types/navigation';
import { Account as AccountInfo } from '@/types/schemas/account';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  StyleService,
  TopNavigationAction,
  useStyleSheet,
} from '@ui-kitten/components';
import { TouchableWebElement } from '@ui-kitten/components/devsupport';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import DrawerMenu from '../drawer-menu/drawer-menu';

function AccountList() {
  const { t } = useTranslation(['common']);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [open, setOpen] = useState<boolean>(false);
  const styles = useStyleSheet(themedStyles);
  const [accountList, setAccountList] = useState<AccountInfo[]>([]);

  const renderRightActions = (): TouchableWebElement => (
    <TopNavigationAction
      icon={PlusIcon}
      onPress={() => navigation.navigate('AccountSetting')}
    />
  );

  const renderMenuAction = (): TouchableWebElement => (
    <TopNavigationAction icon={MenuIcon} onPress={() => setOpen(true)} />
  );

  const renderItem = ({ item, drag }: RenderItemParams<AccountInfo>) => (
    <ScaleDecorator>
      <Account
        onPress={(item) => console.log(item)}
        onLongPress={drag}
        style={styles.account}
        account={item}
      />
    </ScaleDecorator>
  );

  useEffect(() => {
    setAccountList(mockAccountList(10));
  }, []);

  return (
    <ScreenView>
      <ScreenTopNavigation
        title={t('keyList.title')}
        alignment="center"
        accessoryLeft={renderMenuAction}
        accessoryRight={renderRightActions}
      />
      <View style={accountList.length === 0 ? styles.listEmpty : null}>
        <DraggableFlatList<AccountInfo>
          data={accountList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          onDragEnd={({ data }) => setAccountList(data)}
          ListEmptyComponent={
            <Empty style={styles.empty} descStyle={styles.descStyle} />
          }
        />
      </View>
      <DrawerMenu open={open} onClose={() => setOpen(false)} />
    </ScreenView>
  );
}

const themedStyles = StyleService.create({
  listEmpty: {
    flex: 1,
    justifyContent: 'center',
  },
  account: {
    marginTop: 8,
  },
  empty: {
    marginBottom: 64,
  },
  descStyle: {
    color: 'text-basic-color',
  },
});

export default AccountList;
