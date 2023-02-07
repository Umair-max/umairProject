import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FirebaseSignupScreen from '../screens/FirebaseSignupScreen';
import FirebaseLoginScreen from '../screens/FirebaseLoginScreen';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FirebaseSignup"
          component={FirebaseSignupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FirebaseLogin"
          component={FirebaseLoginScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
