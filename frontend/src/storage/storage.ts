import { Platform } from 'react-native';
import RNFS from 'react-native-fs';
import { MMKV } from 'react-native-mmkv';
import pkgJson from '../../package.json';

const getMMKVDirectory = () =>
  Platform.select({
    ios: `${RNFS.LibraryDirectoryPath}/${pkgJson.name}-mmkv`,
    android: `${RNFS.DocumentDirectoryPath}/${pkgJson.name}-mmkv`,
  });

const MMKV_DIRECTORY = getMMKVDirectory();

const globalStorage = new MMKV({
  id: 'global',
  path: `${MMKV_DIRECTORY}/global`,
});

const storeLastLoggedInUser = (userId: string) => {
  globalStorage.set('lastLoggedInUser', userId);
};

const getLastLoggedInUser = () => {
  return globalStorage.getString('lastLoggedInUser');
};

const createStorageInstanceForUser = (userId: string): MMKV => {
  return new MMKV({
    id: `user_${userId}`,
    path: `${MMKV_DIRECTORY}/user_${userId}`,
  });
};

const createOfflineStorageInstance = (): MMKV => {
  return new MMKV({
    id: 'offline',
    path: `${MMKV_DIRECTORY}/offline`,
  });
};

const getStorageInstance = (): MMKV => {
  const lastUserId = getLastLoggedInUser();
  if (lastUserId) return createStorageInstanceForUser(lastUserId);
  return createOfflineStorageInstance();
};

export const storage = getStorageInstance();
