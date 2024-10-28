import { useTheme } from '@/theme';
import React, { useEffect } from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
export type SwitchProps = {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  style?: ViewStyle;
  duration?: number;
  trackColors?: { on: string; off: string };
};

const Switch = ({
  checked,
  onChange,
  style,
  duration = 400,
  trackColors: customTrackColors,
}: SwitchProps) => {
  const { token } = useTheme();
  const height = useSharedValue(0);
  const width = useSharedValue(0);
  const checkedValue = useSharedValue<boolean>(false);
  const trackColors = customTrackColors ?? {
    on: token['color-primary-500'],
    off: token['color-primary-disabled'],
  };

  const trackAnimatedStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      Number(checkedValue.value),
      [0, 1],
      [trackColors.off, trackColors.on],
    );
    const colorValue = withTiming(color, { duration });
    return {
      backgroundColor: colorValue,
      borderRadius: height.value / 2,
    };
  });

  const thumbAnimatedStyle = useAnimatedStyle(() => {
    const moveValue = interpolate(
      Number(checkedValue.value),
      [0, 1],
      [0, width.value - height.value],
    );
    const translateValue = withTiming(moveValue, { duration });
    return {
      transform: [{ translateX: translateValue }],
      borderRadius: height.value / 2,
    };
  });

  const handlePress = () => {
    ('worklet');
    if (onChange) onChange(!checked);
  };

  useEffect(() => {
    checkedValue.value = checked;
  }, [checked]);

  return (
    <Pressable onPress={handlePress}>
      <Animated.View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
          width.value = e.nativeEvent.layout.width;
        }}
        style={[switchStyles.track, style, trackAnimatedStyle]}
      >
        <Animated.View
          style={[switchStyles.thumb, thumbAnimatedStyle]}
        ></Animated.View>
      </Animated.View>
    </Pressable>
  );
};

const switchStyles = StyleSheet.create({
  track: {
    alignItems: 'flex-start',
    padding: 4,
    width: 55,
    height: 30,
  },
  thumb: {
    height: '100%',
    aspectRatio: 1,
    backgroundColor: 'white',
  },
});

export default Switch;
