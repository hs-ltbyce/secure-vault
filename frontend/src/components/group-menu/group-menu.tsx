import { Menu, MenuItem, MenuItemProps, Text } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';

export type GroupMenuItem = {
  key: string;
  title?: string;
  items: {
    key: string;
    title: string;
    accessoryLeft?: MenuItemProps['accessoryLeft'];
    accessoryRight?: MenuItemProps['accessoryRight'];
    onPress?: MenuItemProps['onPress'];
  }[];
};

type Props = {
  items: GroupMenuItem[];
};

function GroupMenu({ items }: Props) {
  return (
    <View>
      {items.map((group) => (
        <View style={styles.group} key={group.key}>
          {group.title && (
            <Text style={styles.groupTitle} category="p2">
              {group.title}
            </Text>
          )}
          {group.items.length > 0 && (
            <Menu style={styles.menu}>
              {group.items.map((menu) => (
                <MenuItem
                  key={menu.key}
                  title={menu.title}
                  accessoryLeft={menu.accessoryLeft}
                  accessoryRight={menu.accessoryRight}
                  onPress={menu.onPress}
                />
              ))}
            </Menu>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  group: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  groupTitle: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  menu: {
    borderRadius: 12,
  },
});

export default GroupMenu;
