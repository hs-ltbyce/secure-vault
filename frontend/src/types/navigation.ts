import type { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  AccountList: undefined;
  Startup: undefined;
  Example: undefined;
  Setting: undefined;
};

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;
