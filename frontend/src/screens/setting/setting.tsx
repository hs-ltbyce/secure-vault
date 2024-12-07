import {
  ArrowIOSBackIcon,
  ArrowIOSForwardIcon,
  BellIcon,
  SettingIcon,
} from '@/components/icons/icons';
import ListGroup from '@/components/list-group/list-group';
import ScreenTopNavigation from '@/components/screen-top-navigation/screen-top-navigation';
import ScreenView from '@/theme/screen-view';
import { RootStackParamList } from '@/types/navigation';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TopNavigationAction } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';

function Setting() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { t } = useTranslation(['common']);
  return (
    <ScreenView>
      <ScreenTopNavigation
        alignment="center"
        title={t('setting.title')}
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
            key: 'setting',
            items: [
              {
                key: 'general',
                title: t('generalSetting.title'),
                accessoryLeft: SettingIcon,
                accessoryRight: ArrowIOSForwardIcon,
                onPress: () => navigation.navigate('GeneralSetting'),
              },
              {
                key: 'notification',
                title: t('notificationSetting.title'),
                accessoryLeft: BellIcon,
                accessoryRight: ArrowIOSForwardIcon,
              },
            ],
          },
        ]}
      />
    </ScreenView>
  );
}

export default Setting;
