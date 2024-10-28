import {
  RenderAccessoryLeft,
  RenderAccessoryRight,
  RenderTextElement,
} from '@/types';
import { Divider, List, ListItem, Text } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';

interface IListItem {
  key: string;
  title: RenderTextElement;
  accessoryLeft?: RenderAccessoryLeft;
  accessoryRight?: RenderAccessoryRight;
  description?: RenderTextElement;
  onPress?: () => void;
}

export type ListGroupItem = {
  key: string;
  title?: RenderTextElement;
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
        <View style={styles.group} key={group.key}>
          {typeof group.title === 'string' ||
          typeof group.title === 'number' ? (
            <Text style={styles.groupTitle}>{group.title}</Text>
          ) : typeof group.title === 'function' ? (
            group.title()
          ) : (
            group.title
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
    borderRadius: 8,
  },
});

export default ListGroup;
