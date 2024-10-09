import {
  Dimensions,
  DimensionValue,
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
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface DrawerProps {
  open?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
  duration?: number;
  placement?: 'left' | 'right' | 'bottom' | 'top';
}

type Direction = 'x' | 'y';

function getDrawerStyle(direction: Direction): {
  width: DimensionValue;
  height: DimensionValue;
} {
  const { height: windowHight, width: windowWidth } = Dimensions.get('window');
  if (direction === 'x')
    return {
      width: '30%',
      height: windowHight,
    };
  return {
    width: windowWidth,
    height: '30%',
  };
}

function Drawer(props: DrawerProps) {
  const {
    open,
    children,
    style,
    placement = 'left',
    duration = 300,
    onClose,
  } = props;
  const layout = useSharedValue(0);
  const insets = useSafeAreaInsets();
  const direction: Direction =
    placement === 'left' || placement === 'right' ? 'x' : 'y';
  const { width: defaultWidth, height: defaultHeight } =
    getDrawerStyle(direction);

  const progress = useDerivedValue(() =>
    withTiming(open ? 0 : 1, { duration }),
  );

  const sheetStyle = useAnimatedStyle(() => ({
    transform:
      direction === 'x'
        ? [
            {
              translateX:
                (placement === 'left' ? -1 : 1) *
                progress.value *
                2 *
                layout.value,
            },
          ]
        : [
            {
              translateY:
                (placement === 'top' ? -1 : 1) *
                progress.value *
                2 *
                layout.value,
            },
          ],
  }));

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: 1 - progress.value,
    zIndex: open ? 1 : withDelay(duration, withTiming(-1, { duration: 0 })),
  }));

  const containerStyle: ViewStyle = {
    height: defaultHeight,
    width: defaultWidth,
    position: 'absolute',
    zIndex: 2,
    padding: 12,
    paddingTop: placement === 'bottom' ? 12 : insets.top + 12,
    backgroundColor: 'white',
    top: placement === 'top' ? 0 : undefined,
    left: placement === 'left' ? 0 : undefined,
    right: placement === 'right' ? 0 : undefined,
    bottom: placement === 'bottom' ? 0 : undefined,
    ...style,
  };

  return (
    <>
      <Animated.View style={[styles.backdrop, backdropStyle]}>
        <TouchableOpacity style={styles.flex} onPress={() => onClose?.()} />
      </Animated.View>
      <Animated.View
        onLayout={(e) => {
          layout.value =
            direction === 'x'
              ? e.nativeEvent.layout.width
              : e.nativeEvent.layout.height;
        }}
        style={[sheetStyle, containerStyle]}
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
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default Drawer;
