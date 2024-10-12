import { RouteProp } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import { Account } from './schemas/account';

export type RootStackParamList = {
  AccountList: undefined;
  AccountSetting:
    | undefined
    | {
        account: Account;
      };
  Startup: undefined;
  Example: undefined;
  Setting: undefined;
  GeneralSetting: undefined;
  LanguageSetting: undefined;
  DarkModeSetting: undefined;
};

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;

export type NavigationParams<K extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  K
>;
