import React from 'react';
import {ImageBackground, StyleSheet, View, Image } from 'react-native';

import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

function WelcomeScreen({navigation}) {
    return (
        <ImageBackground 
            blurRadius={5}
            style={styles.backgroundImage} 
            source={require('../assets/background.jpg')}>
            <Image 
                style={styles.logo} 
                source={require('../assets/logo-red.png')} />
            <AppText
                style={styles.text}>Sell what you don't need
            </AppText> 
            <View style={styles.button}>
            <AppButton 
                color='primaryRed' title='Login' onPress={() => navigation.navigate('Login')}/>
            <AppButton 
                color='primaryGreen' title='Register' onPress={() => navigation.navigate('Register')}/>
            </View> 
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20
    },
    logo:{
        width: 100,
        height: 100,
        alignSelf: 'center',
        position: 'absolute',
        top: 100
    },
    button:{
        paddingHorizontal: 15
    },
    text: {
        alignSelf: 'center',
        justifyContent: 'center',
        top: 210,
        position: 'absolute'        
    }
})

export default WelcomeScreen;