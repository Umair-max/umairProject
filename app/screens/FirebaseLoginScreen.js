import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

function FirebaseLoginScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // *************************************** store email and password in firebase authentication ************************
  const handleLogin = () => {
    try {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          alert(error);
        });
    } catch (error) {
      console.log('handle login givng an error', error);
    }
  };

  return (
    <View style={styles.container}>
      <AppTextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <AppTextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <AppButton title={'login'} onPress={() => handleLogin()} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    top: 100,
  },
});
export default FirebaseLoginScreen;
