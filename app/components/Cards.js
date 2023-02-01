import FastImage from 'react-native-fast-image';
import React from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText'; 

function Cards({imageUrl, title, price, onPress, thumbnailUrl}) {
    return ( 
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <FastImage 
                    style={styles.image} 
                    source={{uri : imageUrl}}
                />
                <View style={styles.details}>
                    <AppText style={styles.description}>{title}</AppText>
                    <AppText style={styles.price}>{price}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 25,
        overflow: 'hidden',
        marginBottom: 30
    },
    image: {
        width: '100%',
        height: 200
    },
    details:{
        padding: 20
    },
    description: {
        marginBottom: 15
    },
    price: {
        color: colors.primaryGreen,
        
    } 
})
export default Cards;