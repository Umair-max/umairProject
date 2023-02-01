import React from 'react';
import { Text, StyleSheet, StatusBar, View } from 'react-native';
import {useNetInfo} from "@react-native-community/netinfo";

import colors from '../config/colors';
import Screen from './Screen'

function OfflineNotice(props) {
    const netinfo = useNetInfo();
    if(netinfo.type !=='unknown' && netinfo.isInternetReachable === false)

    return (
        <Screen style={styles.index}>
            <View style={styles.container}>
            <Text style={styles.text}>No Internet Connection</Text>
            </View>
        </Screen>
    );
    return null;
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primaryRed,
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        top: StatusBar.currentHeight // android
    },
    index: {
        zIndex: 1,
        backgroundColor: colors.light
    },
    text: {
        color: colors.white,
        fontSize: 18
    }
})
export default OfflineNotice;