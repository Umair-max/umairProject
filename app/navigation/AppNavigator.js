import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import colors from '../config/colors';
import IconOnly from '../components/IconOnly';
import NewListingButton from './NewListingButton';
import AccountNavigator from './AccountNavigator';

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({color}) => (
          <IconOnly
            iconSource={require('../assets/home.png')}
            backgroundColor={colors.white}
            iconColor={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="ListingEdit"
      component={ListingEditScreen}
      options={({navigation}) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate('ListingEdit')}
          />
        ),
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({color}) => (
          <IconOnly
            iconSource={require('../assets/user.png')}
            backgroundColor={colors.white}
            iconColor={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
