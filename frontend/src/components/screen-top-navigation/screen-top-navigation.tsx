import { TopNavigation, TopNavigationProps } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

function ScreenTopNavigation({ ...topNavigationProps }: TopNavigationProps) {
  return (
    <TopNavigation
      {...topNavigationProps}
      style={[styles.topNavigation, topNavigationProps.style]}
    />
  );
}

const styles = StyleSheet.create({
  topNavigation: {
    backgroundColor: 'transparent',
  },
});

export default ScreenTopNavigation;
