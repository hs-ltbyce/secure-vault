import Account from '@/components/account-list/account';
import CreateAccountDrawer from '@/components/account-list/create-account-drawer';
import Empty from '@/components/common/empty';
import { MenuIcon, PlusIcon } from '@/components/icons/icons';
import ScreenTopNavigation from '@/components/screen-top-navigation/screen-top-navigation';
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
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import { useMMKVString } from 'react-native-mmkv';
import uuid from 'react-native-uuid';
import DrawerMenu from '../drawer-menu/drawer-menu';

function AccountList() {
  const { t } = useTranslation(['common']);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openRight, setOpenRight] = useState<boolean>(false);
  const styles = useStyleSheet(themedStyles);
  const [accountListStr, setAccountList] = useMMKVString('accountList');

  const accountList: AccountInfo[] = accountListStr
    ? JSON.parse(accountListStr)
    : [];

  const renderRightActions = (): TouchableWebElement => (
    <TopNavigationAction icon={PlusIcon} onPress={() => setOpenRight(true)} />
  );

  const renderMenuAction = (): TouchableWebElement => (
    <TopNavigationAction icon={MenuIcon} onPress={() => setOpenMenu(true)} />
  );

  const renderItem = ({
    item,
    drag,
    isActive,
  }: RenderItemParams<AccountInfo>) => (
    <ScaleDecorator>
      <TouchableOpacity onLongPress={drag} disabled={isActive}>
        <Account
          onPress={() =>
            navigation.navigate('AccountSetting', {
              account: item,
            })
          }
          onLongPress={drag}
          style={styles.account}
          account={item}
        />
      </TouchableOpacity>
    </ScaleDecorator>
  );

  const handleAddSubmit = (
    data: Pick<AccountInfo, 'account' | 'password' | 'title'>,
  ) => {
    setAccountList((current = '[]') => {
      const dataList = JSON.parse(current);
      dataList.push({
        ...data,
        id: uuid.v4(),
      });
      return JSON.stringify(dataList);
    });
    setOpenRight(false);
  };

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
          style={styles.listContainer}
          data={accountList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          onDragEnd={({ data }) => {
            setTimeout(() => {
              setAccountList(JSON.stringify(data));
            }, 0);
          }}
          ListEmptyComponent={
            <Empty style={styles.empty} descStyle={styles.descStyle} />
          }
        />
      </View>
      <DrawerMenu open={openMenu} onClose={() => setOpenMenu(false)} />
      <CreateAccountDrawer
        open={openRight}
        style={styles.createAccountStyle}
        onClose={() => setOpenRight(false)}
        onSave={handleAddSubmit}
      />
    </ScreenView>
  );
}

const themedStyles = StyleService.create({
  listEmpty: {
    flex: 1,
    justifyContent: 'center',
  },
  listContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  account: {
    marginBottom: 6,
    borderRadius: 16,
  },
  empty: {
    marginBottom: 64,
  },
  descStyle: {
    color: 'text-basic-color',
  },
  createAccountStyle: {
    backgroundColor: 'background-basic-color-1',
    height: '100%',
  },
});

export default AccountList;
