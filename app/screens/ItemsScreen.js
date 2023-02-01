import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cards from '../components/Cards'
import colors from '../config/colors'

function ItemsScreen(props) {
    return (
        <View style={styles.container}>
            <Cards
            image={require('../assets/jacket.jpg')}
            description='Red jacket for Sale!'
            price='$100'/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        padding: 20,
        paddingTop: 100,

    } 
})
export default ItemsScreen;