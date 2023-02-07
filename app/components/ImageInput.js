import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import colors from '../config/colors';
import Icon from './Icon';

function ImageInput({imageUri, onChangeImage}) {
  // useEffect(() => {
  //     requestPermission();
  // }, [])
  // const requestPermission = async () => {
  //     const {granted} = await launchImageLibrary()
  //     if (!granted) alert('you need to enable permission to access images')
  // }

  const handleChange = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert('Delete', 'Are you sure you want yo delete this imate', [
        {text: 'Yes', onPress: () => onChangeImage(null)},
        {text: 'No'},
      ]);
  };
  const selectImage = async () => {
    try {
      const options = {
        mediaType: 'photo',
        quality: 0.1,
      };
      const result = await launchImageLibrary(options);
      if (!result?.didCancel) {
        result.assets.map(({uri}) => {
          onChangeImage(uri);
        });
      }
    } catch (error) {
      console.log('image reading an error', error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleChange}>
      <View style={styles.container}>
        {!imageUri && (
          <Icon
            iconSource={require('../assets/photo-camera.png')}
            backgroundColor={colors.light}
            iconColor={colors.grey}
            iconSize={80}
          />
        )}
        {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    height: 100,
    width: 100,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
export default ImageInput;
