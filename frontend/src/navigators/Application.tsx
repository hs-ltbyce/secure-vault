import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Example, Startup } from '@/screens';
import { useTheme } from '@/theme';

import AccountList from '@/screens/account-list/account-list';
import DrawerMenu from '@/screens/drawer-menu/drawer-menu';
import Setting from '@/screens/setting/setting';
import type { RootStackParamList } from '@/types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
  const { variant, navigationTheme } = useTheme();

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
          <Stack.Screen name="AccountList" component={AccountList} />
          <Stack.Screen name="Startup" component={Startup} />
          <Stack.Screen name="Example" component={Example} />
          <Stack.Screen name="Setting" component={Setting} />
        </Stack.Navigator>
        <DrawerMenu />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default ApplicationNavigator;
