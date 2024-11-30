import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  AccountList,
  AccountSetting,
  DarkModeSetting,
  GeneralSetting,
  LanguageSetting,
  Setting,
} from '@/screens';
import type { RootStackParamList } from '@/types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="AccountList" component={AccountList} />
          <Stack.Screen name="AccountSetting" component={AccountSetting} />
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
