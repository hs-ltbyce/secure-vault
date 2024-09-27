import { ArrowIOSBackIcon } from '@/components/icons/icons';
import ListGroup from '@/components/list-group/list-group';
import ScreenTopNavigation from '@/components/screen-top-navigation/screen-top-navigation';
import { useTheme } from '@/theme';
import ScreenView from '@/theme/screen-view';
import { useNavigation } from '@react-navigation/native';
import {
  Toggle,
  ToggleProps,
  TopNavigationAction,
} from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';
import { Appearance } from 'react-native';
import { useMMKVBoolean } from 'react-native-mmkv';

function DarkModeSetting() {
  const navigation = useNavigation();
  const { t } = useTranslation(['common']);
  const { theme, changeTheme } = useTheme();
  const [useSystemTheme, setUseSystemTheme] = useMMKVBoolean('useSystemTheme');

  const darkModeChange: ToggleProps['onChange'] = (checked) => {
    const nextTheme = checked ? 'dark' : 'light';
    const systemTheme = Appearance.getColorScheme();
    if (systemTheme !== nextTheme && nextTheme === 'dark')
      setUseSystemTheme(false);
    changeTheme(nextTheme);
  };

  return (
    <ScreenView>
      <ScreenTopNavigation
        alignment="center"
        title={t('darkModeSetting.title')}
        accessoryLeft={() => (
          <TopNavigationAction
            icon={ArrowIOSBackIcon}
            onPress={() => navigation.goBack()}
          />
        )}
      />
      <ListGroup
        items={[
          {
            key: 'darkModeSetting',
            items: [
              {
                key: 'darkMode',
                title: t('darkModeSetting.title'),
                accessoryRight: (
                  <Toggle
                    status="primary"
                    checked={theme === 'dark'}
                    onChange={darkModeChange}
                  />
                ),
              },
            ],
          },
          {
            key: 'system',
            items: [
              {
                key: 'followSystem',
                title: t('darkModeSetting.followSystem'),
                description: t('darkModeSetting.followSystemDesc'),
                accessoryRight: (
                  <Toggle
                    status="primary"
                    checked={useSystemTheme}
                    onChange={(checked) => setUseSystemTheme(checked)}
                  />
                ),
              },
            ],
          },
        ]}
      />
    </ScreenView>
  );
}

export default DarkModeSetting;
