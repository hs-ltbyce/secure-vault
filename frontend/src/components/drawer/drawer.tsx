import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

interface Props {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
  duration?: number;
}

const duration = 300;
const { height } = Dimensions.get('window');

function Drawer(props: Props) {
  const { open, children, style, onClose } = props;
  const styleWidth = style?.width ?? '30%';
  const width = useSharedValue(0);

  const progress = useDerivedValue(() =>
    withTiming(open ? 0 : 1, { duration }),
  );

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -progress.value * 2 * width.value }],
  }));

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: 1 - progress.value,
    zIndex: open ? 1 : withDelay(duration, withTiming(-1, { duration: 0 })),
  }));

  const containerStyle = {
    height,
    width: styleWidth,
    ...style,
  };

  return (
    <>
      <Animated.View style={[styles.backdrop, backdropStyle]}>
        <TouchableOpacity style={styles.flex} onPress={() => onClose()} />
      </Animated.View>
      <Animated.View
        onLayout={(e) => {
          width.value = e.nativeEvent.layout.width;
        }}
        style={[styles.container, sheetStyle, containerStyle]}
      >
        {children}
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    padding: 12,
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default Drawer;
