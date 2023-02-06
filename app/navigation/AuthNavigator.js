import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import FirebaseTestingScreen from '../screens/FirebaseTestingScreen';
import FirebaseAuthenticationScreen from '../screens/FirebaseAuthenticationScreen';

const Stack = createNativeStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen
      name="FirebaseAuthenticationScreen"
      component={FirebaseTestingScreen}
    />
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
