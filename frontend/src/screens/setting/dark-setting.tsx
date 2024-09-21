import { ArrowIOSBackIcon } from '@/components/icons/icons';
import ScreenTopNavigation from '@/components/screen-top-navigation/screen-top-navigation';
import { useNavigation } from '@react-navigation/native';
import { TopNavigationAction } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

function DarkModeSetting() {
  const navigation = useNavigation();
  const { t } = useTranslation(['common']);

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
    </SafeAreaView>
  );
}

export default DarkModeSetting;
