import react from 'react';
import React from 'react';
import { Image , StyleSheet, View} from 'react-native';
import colors from '../config/colors';

function ItemImageScreen(props) {
    return (
        <View style={styles.bG}>
            <Image 
                style={styles.cancel}
                source={require('../assets/cancel.png')}/>
            <Image 
                style={styles.correct}
                source={require('../assets/correct.png')}/>
            <Image 
            resizeMode= 'contain'
            style={styles.itemImage}
            source={require('../assets/chair.jpg')}></Image>
       </View>
    );
}
const styles = StyleSheet.create({
    bG:{
        backgroundColor: colors.black
    },
    cancel:{
        width: 50,
        height: 50,
        position: 'absolute',
        margin: 30
    },
    correct:{
        width: 50,
        height: 50,
        position: 'absolute',
        right: 0,
        margin: 30
    },
    itemImage:{
        width: '100%',
        height: '100%'
    },

})
export default ItemImageScreen;