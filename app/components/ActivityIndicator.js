import React from 'react'
import Lottie from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';


export default function ActivityIndicator({visible = false}) {
    if (!visible) return null;
  return (
    <View >
      <Lottie 
          source={require('../assets/animation/loading.json')}
          autoPlay
          loop
          style={{
            width: 150,
            alignSelf: 'center',
            justifyContent: 'center',
            top: '60%'
          }}
      />
    </View>
  )
}
