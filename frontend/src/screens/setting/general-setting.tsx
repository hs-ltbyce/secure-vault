import {
  ArrowIOSBackIcon,
  ArrowIOSForwardIcon,
} from '@/components/icons/icons';
import ListGroup from '@/components/list-group/list-group';
import ScreenTopNavigation from '@/components/screen-top-navigation/screen-top-navigation';
import { RootStackParamList } from '@/types/navigation';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TopNavigationAction } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

function GeneralSetting() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { t } = useTranslation(['common']);
  return (
    <SafeAreaView>
      <ScreenTopNavigation
        alignment="center"
        title={t('generalSetting.title')}
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
            title: t('generalSetting.display'),
            items: [
              {
                title: t('generalSetting.languages'),
                accessoryRight: ArrowIOSForwardIcon,
                onPress: () => navigation.navigate('LanguageSetting'),
              },
              {
                title: t('generalSetting.darkMode'),
                accessoryRight: ArrowIOSForwardIcon,
                onPress: () => navigation.navigate('DarkModeSetting'),
              },
            ],
          },
        ]}
      />
    </SafeAreaView>
  );
}

export default GeneralSetting;
