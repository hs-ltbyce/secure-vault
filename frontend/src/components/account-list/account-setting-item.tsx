import { useTheme } from '@/theme';
import { Text } from '@ui-kitten/components';
import { ReactNode } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

function AccountSettingItem(props: {
  label: string;
  text?: string;
  accessoryRight?: ReactNode;
  placeholder?: string;
  onPress?: () => void;
  onLongPress?: () => void;
}) {
  const { text, label, placeholder, accessoryRight, onLongPress, onPress } =
    props;
  const { token } = useTheme();
  return (
    <Pressable onPress={onPress} onLongPress={onLongPress}>
      <View
        style={[
          styles.container,
          {
            borderBottomWidth: 1,
            borderBottomColor: token['color-basic-default-border'],
          },
        ]}
      >
        <Text appearance="hint">{label}</Text>
        <View style={[styles.text]}>
          {text && <Text>{text}</Text>}
          {!text && placeholder && <Text appearance="hint">{placeholder}</Text>}
          {accessoryRight}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 12,
  },
  text: {
    flexDirection: 'row',
  },
});

export default AccountSettingItem;
