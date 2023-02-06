import React, {useState} from 'react';
import {FlatList} from 'react-native';
import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen';

const InitialMessages = [
  {
    id: 1,
    title: 't1',
    description: 'd1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 't2',
    description: 'd2',
    image: require('../assets/mosh.jpg'),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(InitialMessages);
  const handleDelete = message => {
    setMessages(messages.filter(singleItem => singleItem.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            description={item.description}
            image={item.image}
            onDelete={() => handleDelete(item)}
            onPress={() => console.log('message selected', item)}
          />
        )}
      />
    </Screen>
  );
}

export default MessagesScreen;
