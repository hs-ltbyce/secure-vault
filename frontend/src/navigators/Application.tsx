import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Example, Startup } from '@/screens';

import AccountList from '@/screens/account-list/account-list';
import AccountSetting from '@/screens/account-list/account-setting';
import DarkModeSetting from '@/screens/setting/dark-setting';
import GeneralSetting from '@/screens/setting/general-setting';
import LanguageSetting from '@/screens/setting/language-setting';
import Setting from '@/screens/setting/setting';
import type { RootStackParamList } from '@/types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="AccountList" component={AccountList} />
          <Stack.Screen name="AccountSetting" component={AccountSetting} />
          <Stack.Screen name="Startup" component={Startup} />
          <Stack.Screen name="Example" component={Example} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="GeneralSetting" component={GeneralSetting} />
          <Stack.Screen name="LanguageSetting" component={LanguageSetting} />
          <Stack.Screen name="DarkModeSetting" component={DarkModeSetting} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default ApplicationNavigator;
