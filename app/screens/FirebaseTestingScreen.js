import React, {useState, useEffect} from 'react';
import database from '@react-native-firebase/database';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function FirebaseTestingScreen(props) {
  const [getData, setGetData] = useState([]);
  const [inputText, setInputText] = useState(null);

  // useEffect(() => {
  //   readData();
  // }, []);

  //  ************************************* input data in realtime database ********************************
  const createData = () => {
    var key = database().ref('/users').push().key;
    try {
      database().ref('/users').child(key).set({
        name: inputText,
      });
      Alert.alert('Done', 'User is successfuly added');
    } catch (error) {
      console.log(error);
    }
  };
  // ************************************** Output data from  realtime database *************************************
  const readData = () => {
    try {
      database()
        .ref('/users')
        .on('value', snapshot => {
          var data = [];

          snapshot.forEach(item => {
            var name_ = item.val().name;
            var key_ = item.key;
            data.push({
              name: name_,
              key: key_,
            });
          });
          setGetData(data);
          console.log(data);
        });
    } catch (error) {
      console.log('readData giving an error', error);
    }
  };
  // ********************************************* Delete user with long press ********************************************
  const handleDelete = key => {
    try {
      console.log(key);
      database().ref(`/users/${key}`).remove();
    } catch (error) {
      console.log('user delete giving an error', error);
    }
  };

  const handleAlert = key => {
    Alert.alert('Delete!', 'do you want to remove the User', [
      {
        text: 'Yes',
        onPress: () => handleDelete(key),
      },
      {
        text: 'Cancel',
        onPress: null,
      },
    ]);
  };
  // **********************************************************************************************************************
  return (
    <View style={styles.container}>
      <AppTextInput
        placeholder="Enter Something"
        onChangeText={text => setInputText(text)}
        value={inputText}
      />

      <AppButton title={'Add user'} onPress={() => createData()} />
      <AppButton title={'get users'} onPress={() => readData()} />

      <View style={styles.listContainer}>
        <Text style={styles.title}>Output from Database:</Text>
        <FlatList
          data={getData}
          renderItem={({item, index}) => {
            const key = item.key;
            return (
              <TouchableOpacity
                style={styles.list}
                onLongPress={() => handleAlert(key)}>
                <Text style={styles.text}>{item.name}</Text>
                {/* <Text style={styles.text}>{item.email}</Text> */}
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    top: 100,
  },
  listContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 24,
  },
  text: {
    fontSize: 22,
    marginHorizontal: 20,
  },
  list: {
    fontSize: 24,
    backgroundColor: colors.light,
    borderRadius: 20,
    paddingVertical: 10,
    marginTop: 20,
  },
});
export default FirebaseTestingScreen;

// var temp = {};
// temp.name = item.val().name;
// temp.key = item.key;
// data.push(temp);
