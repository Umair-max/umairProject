import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import database from '@react-native-firebase/database';

import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';

function FirebaseStartingScreen(props) {
  const [myData, setMyData] = useState(null);
  const [text, setText] = useState(null);

  const addDatabase = async () => {
    database()
      .ref('/users/2')
      .set({
        name: 'Ada Lovelace',
        age: 31,
      })
      .then(() => console.log('Data set.'));
  };

  const getDatabase = async () => {
    database()
      .ref('/users/1')
      .on('value', snapshot => {
        console.log('User data: ', snapshot.val());
        setMyData(snapshot.val());
      });
  };
  useEffect(() => {
    getDatabase();
  }, []);

  return (
    <View style={styles.container}>
      <Screen>
        <AppTextInput
          placeholder="Write something"
          onChangeText={newText => setText(newText)}
        />
        <AppButton
          title={'ADD INPUT'}
          onPress={usertext => setText(usertext)}
        />
        <AppButton title={'GET'} onPress={getDatabase} />
        <AppButton title={'ADD'} onPress={addDatabase} />
        <Text style={styles.text}>{myData ? myData.name : 'loading...'}</Text>
        <Text style={styles.text}>{text ? text : 'input....'}</Text>
      </Screen>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default FirebaseStartingScreen;

// const getDatabase = async () => {
//   try {
//     const data = await database().ref('users/1').once('value');
//     console.log(data);
//     // setMyData(data.val());
//   } catch (error) {
//     console.log('database givng an error', error);
//   }
// };

// const getDatabase = () => {
//   var data = [];

//   database()
//     .ref('users')
//     .on('value', snapshot => {
//       snapshot.forEach(item => {
//         console.log('User data: ', item);
//         data.push(item);
//       });
//       setMyData(data);
//       console.log('ARRAY', data);
//     });
// };
