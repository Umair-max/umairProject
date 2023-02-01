import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import * as Yup from 'yup';

import colors from '../config/colors'
import SimpleListItem from '../components/lists/SimpleListItem';
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import AppForm from '../components/forms/AppForm';
// import {showNotification, handleSheduleNotification, showLocalNotification} from '../src/notification.ios'

const validationSchema = Yup.object().shape({
    message: Yup.string().optional().label('message'),
});


function ItemDetailScreen({route}) {
    const listing = route.params;
    return (
        <View>
            <FastImage 
                style={styles.image}
                source={{uri: listing.images[0].url}} 
            />
            <View style={styles.details}>
                <Text style={styles.caption}>{listing.title}</Text>
                <Text style={styles.price}>${listing.price}</Text>
            </View>
            <SimpleListItem 
                title={'Mosh Hamadani'}
                description={'5 Listings'}
                image={require('../assets/mosh.jpg')}
            />
            <AppForm
                initialValues={{
                    message: ''
                }}               
                // onSubmit={() => showLocalNotification('React Native', 'Your message sent to the seller')}
                validationSchema={validationSchema}
            >
            <View style={styles.contact}>
                <AppFormField 
                    name='message'
                    placeholder='Message'
                    autoCorrect= 'none'
                    autoCapitalize={false}
                    textContentType='message'
                    numberOfLines={2}
                    multiline
                />
                <SubmitButton 
                    title='CONTACT SELLER'
                />
            </View>
            </AppForm>
            
        </View>
    );
}
const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 300,
    },
    details: {
        padding: 20
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold'   
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors .primaryGreen,
        paddingVertical: 10
    },
    contact: {
        paddingHorizontal: 30,
        top: 20
    }
})
export default ItemDetailScreen;