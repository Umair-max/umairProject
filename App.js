import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContaxt from './app/auth/context';
import authStorage from './app/auth/storage';
import SplashScreen from './app/screens/SplashScreen';

export default function App(props) {
  const [user, setUser] = useState();
  const [isDone, setIsDone] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    // restoreUser()

    setTimeout(() => {
      setIsDone(true);
    }, 500);
  }, []);

  return (
    <>
      {isDone === true ? (
        <AuthContaxt.Provider value={{user, setUser}}>
          <OfflineNotice />
          <NavigationContainer theme={navigationTheme}>
            {user ? <AppNavigator /> : <AuthNavigator />}
          </NavigationContainer>
        </AuthContaxt.Provider>
      ) : (
        <SplashScreen />
      )}
    </>
  );
}

// import React from 'react';
// import { Button, Text } from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import Screen from './app/components/Screen';

// import ListingEditScreen from './app/screens/ListingEditScreen';

// const Link = () => {
//   const navigation = useNavigation();
//   return (
//     <Button
//       title='Click'
//       onPress={() => navigation.navigate('TweetDetails')}
//     />
//   )
// }

// const Tweets = ({navigation}) => (
//   <Screen>
//     <Text>Tweet</Text>
//     <Button
//       title='View Tweets'
//       onPress={() => navigation.navigate('TweetDetails', {id: 1})}
//     />
//   </Screen>
// )

// const TweetDetails = ({route}) => (
//   <Screen>
//     <Text>TweetDetails {route.params.id}</Text>
//   </Screen>
// )

// const Stack = createNativeStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator>
//     <Stack.Screen name='Tweets' component={Tweets}  />
//     <Stack.Screen name="TweetDetails" component={TweetDetails} />
//   </Stack.Navigator>
// )

// export default function App(props) {
//   return (
//     //  <ListingEditScreen/>
//     <NavigationContainer>
//       <StackNavigator />
//     </NavigationContainer>
//   )
// }

// react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios
