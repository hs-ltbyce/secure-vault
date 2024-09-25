import {
  RenderAccessoryLeft,
  RenderAccessoryRight,
  RenderTextElement,
} from '@/types';
import { Divider, List, ListItem, Text } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';

interface IListItem {
  title: string;
  accessoryLeft?: RenderAccessoryLeft;
  accessoryRight?: RenderAccessoryRight;
  description?: RenderTextElement;
  onPress?: () => void;
}

export type ListGroupItem = {
  title?: string;
  items: IListItem[];
};

type Props = {
  items: ListGroupItem[];
};

function ListGroup({ items }: Props) {
  const renderItem = ({ item }: { item: IListItem }): React.ReactElement => (
    <ListItem
      title={item.title}
      description={item.description}
      onPress={item.onPress}
      accessoryLeft={item.accessoryLeft}
      accessoryRight={item.accessoryRight}
    />
  );
  return (
    <View>
      {items.map((group) => (
        <View style={styles.group}>
          {group.title && (
            <Text style={styles.groupTitle} category="p2">
              {group.title}
            </Text>
          )}
          {
            <List
              style={styles.list}
              data={group.items}
              ItemSeparatorComponent={Divider}
              renderItem={renderItem}
            />
          }
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
  list: {
    borderRadius: 12,
  },
});

export default ListGroup;
