import GroupMenu from '@/components/group-menu/group-menu';
import { ArrowIOSBackIcon } from '@/components/icons/icons';
import ScreenTopNavigation from '@/components/screen-top-navigation/screen-top-navigation';
import { useNavigation } from '@react-navigation/native';
import { TopNavigationAction } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

function LanguageSetting() {
  const navigation = useNavigation();
  const { t } = useTranslation(['common']);

  return (
    <SafeAreaView>
      <ScreenTopNavigation
        alignment="center"
        title={t('languageSetting.title')}
        accessoryLeft={() => (
          <TopNavigationAction
            icon={ArrowIOSBackIcon}
            onPress={() => navigation.goBack()}
          />
        )}
      />
      <GroupMenu
        items={[
          {
            key: 'language',
            title: t('languageSetting.title'),
            items: [
              {
                key: 'zh-cn',
                title: t('languageSetting.zh-cn'),
              },
              {
                key: 'en',
                title: t('languageSetting.en'),
              },
            ],
          },
        ]}
      />
    </SafeAreaView>
  );
}

export default LanguageSetting;
