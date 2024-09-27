import { ArrowIOSBackIcon } from '@/components/icons/icons';
import ListGroup from '@/components/list-group/list-group';
import ScreenTopNavigation from '@/components/screen-top-navigation/screen-top-navigation';
import { useTheme } from '@/theme';
import { useNavigation } from '@react-navigation/native';
import { Toggle, TopNavigationAction } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

function DarkModeSetting() {
  const navigation = useNavigation();
  const { t } = useTranslation(['common']);
  const { theme, changeTheme } = useTheme();

  return (
    <SafeAreaView>
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
                    onChange={(checked) =>
                      changeTheme(checked ? 'dark' : 'light')
                    }
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
                    checked={false}
                    onChange={(checked) => {}}
                  />
                ),
              },
            ],
          },
        ]}
      />
    </SafeAreaView>
  );
}

export default DarkModeSetting;
