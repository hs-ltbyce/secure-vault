import {
  StyleService,
  TopNavigation,
  TopNavigationProps,
  useStyleSheet,
} from '@ui-kitten/components';

function ScreenTopNavigation({ ...topNavigationProps }: TopNavigationProps) {
  const styles = useStyleSheet(themedStyles);
  return (
    <TopNavigation
      {...topNavigationProps}
      style={[styles.topNavigation, topNavigationProps.style]}
    />
  );
}

const themedStyles = StyleService.create({
  topNavigation: {
    backgroundColor: 'background-basic-color-4',
  },
});

export default ScreenTopNavigation;
