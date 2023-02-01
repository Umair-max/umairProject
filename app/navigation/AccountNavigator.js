import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessagesScreen from '../screens/MessagesScreen';
import AccountScreen from '../screens/AccountScreen';

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator mode="modal" >
        <Stack.Screen name='A' component={AccountScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Messages' component={MessagesScreen}/>
    </Stack.Navigator>
);

export default AccountNavigator;