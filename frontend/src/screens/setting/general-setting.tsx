import {
  ArrowIOSBackIcon,
  ArrowIOSForwardIcon,
} from '@/components/icons/icons';
import ListGroup from '@/components/list-group/list-group';
import ScreenTopNavigation from '@/components/screen-top-navigation/screen-top-navigation';
import ScreenView from '@/theme/screen-view';
import { RootStackParamList } from '@/types/navigation';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TopNavigationAction } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';

function GeneralSetting() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { t } = useTranslation(['common']);
  return (
    <ScreenView>
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
            key: 'display',
            title: t('generalSetting.display'),
            items: [
              {
                key: 'languages',
                title: t('generalSetting.languages'),
                accessoryRight: ArrowIOSForwardIcon,
                onPress: () => navigation.navigate('LanguageSetting'),
              },
              {
                key: 'darkMode',
                title: t('generalSetting.darkMode'),
                accessoryRight: ArrowIOSForwardIcon,
                onPress: () => navigation.navigate('DarkModeSetting'),
              },
            ],
          },
        ]}
      />
    </ScreenView>
  );
}

export default GeneralSetting;
