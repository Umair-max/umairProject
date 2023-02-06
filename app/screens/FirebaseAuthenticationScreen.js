import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

function FirebaseAuthenticationScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // *************************************** store email and password in firebase authentication ************************
  const handleSignup = () => {
    try {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          Alert.alert('Done', 'User Acoount created');
        });
    } catch (error) {
      console.log('signup giving an error', error);
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
      <AppButton title={'signup'} onPress={() => handleSignup()} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    top: 100,
  },
});
export default FirebaseAuthenticationScreen;
