import { SafeAreaView, ViewProps } from 'react-native';
import { useTheme } from '.';

function ScreenView(props: ViewProps) {
  const { token } = useTheme();
  return (
    <SafeAreaView
      {...props}
      style={[
        { backgroundColor: token['background-basic-color-4'], flex: 1 },
        props.style,
      ]}
    />
  );
}

export default ScreenView;
