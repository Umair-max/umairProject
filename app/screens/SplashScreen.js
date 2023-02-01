import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

 export default function SplashScreen() {
    return (
        <View>
            <Image 
                style={styles.image}
                source={require('../assets/splash.png')}
            /> 
        </View>
            

    );
}
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    }
})
