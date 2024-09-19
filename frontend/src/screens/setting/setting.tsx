import { BackIcon } from '@/components/icons/icons';
import ScreenTopNavigation from '@/components/screen-top-navigation/screen-top-navigation';
import { useNavigation } from '@react-navigation/native';
import { TopNavigationAction } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, StyleSheet } from 'react-native';

function Setting() {
  const navigation = useNavigation();
  const { t } = useTranslation(['common']);
  return (
    <SafeAreaView style={styles.container}>
      <ScreenTopNavigation
        alignment="center"
        title={t('screenTitle.setting')}
        accessoryLeft={() => (
          <TopNavigationAction
            icon={BackIcon}
            onPress={() => navigation.goBack()}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Setting;
