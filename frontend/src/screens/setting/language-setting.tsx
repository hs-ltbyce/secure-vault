import { ArrowIOSBackIcon } from '@/components/icons/icons';
import ListGroup from '@/components/list-group/list-group';
import ScreenTopNavigation from '@/components/screen-top-navigation/screen-top-navigation';
import { useNavigation } from '@react-navigation/native';
import { TopNavigationAction } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';
import { useMMKVString } from 'react-native-mmkv';

function LanguageSetting() {
  const navigation = useNavigation();
  const { t } = useTranslation(['common']);
  const [, setLanguage] = useMMKVString('language');
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
      <ListGroup
        items={[
          {
            key: 'language',
            title: t('languageSetting.title'),
            items: [
              {
                key: 'zh-cn',
                title: t('languageSetting.zh-cn'),
                onPress: () => setLanguage('zh-cn'),
              },
              {
                key: 'en',
                title: t('languageSetting.en'),
                onPress: () => setLanguage('en'),
              },
            ],
          },
        ]}
      />
    </SafeAreaView>
  );
}

export default LanguageSetting;
