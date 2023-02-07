import React, {useState} from 'react';
import {View, StyleSheet, Alert, TouchableOpacity, Image} from 'react-native';
import auth from '@react-native-firebase/auth';
import {launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import Icon from '../components/Icon';

function FirebaseSignupScreen(props) {
  const [imageUri, setImageUri] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupId, setSignupId] = useState('');

  // ********************************************** Select image from gellery ***************************************
  const selectImage = async () => {
    try {
      const options = {
        mediaType: 'photo',
        quality: 0.1,
      };
      const result = await launchImageLibrary(options);
      if (!result?.didCancel) {
        result.assets.map(({uri}) => {
          // console.log(uri);
          setImageUri(uri);
        });
      }
    } catch (error) {
      console.log('select image giving an error an error', error);
    }
  };

  // ******************************* store EMAIL and PASSWORD in firebase AUTHENTICATION ************************
  const handleSignup = () => {
    try {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          Alert.alert('Done', 'User Acoount created');
          var userId = auth().currentUser.uid;
          setSignupId(userId);
          storeImage(userId);
        })
        .catch(error => {
          alert(error);
        });
    } catch (error) {
      console.log('signup giving an error', error);
    }
  };

  // **************************************** store profile IMAGE in firebase STORAGE *********************************
  const storeImage = userId => {
    try {
      var pathToBe = `users/${userId}`;
      storage()
        .ref(pathToBe)
        .putFile(imageUri)
        .then(snap => {
          storage()
            .ref(pathToBe)
            .getDownloadURL()
            .then(url => {
              console.log('URL', url);
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log('storaImage giving an error', error);
    }
  };

  return (
    // profile image ******************
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: imageUri}} />
      </View>
      <TouchableOpacity
        style={{bottom: 35, left: 35}}
        onPress={() => selectImage()}>
        <Icon
          iconSource={require('../assets/photo-camera.png')}
          backgroundColor={colors.primaryRed}
          iconColor={colors.white}
          iconSize={40}
        />
      </TouchableOpacity>

      <AppTextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        width={390}
      />
      <AppTextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        width={390}
      />
      <AppButton title={'signup'} onPress={() => handleSignup()} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    top: 100,
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: '#FFCAC8',
    height: 120,
    width: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
export default FirebaseSignupScreen;
