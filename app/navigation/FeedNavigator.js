import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListingScreen from '../screens/ListingScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator >
        <Stack.Screen name='Listing' component={ListingScreen} options={{headerShown: false}}/>
        <Stack.Screen name='ItemDetail' component={ItemDetailScreen} />
    </Stack.Navigator>
);

export default FeedNavigator;