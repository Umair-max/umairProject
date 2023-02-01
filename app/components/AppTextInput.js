import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';


import Screen from './Screen';
import defaultStyles from '../config/styles'

import Icon from './Icon'

function AppTextInput({iconSource, width='100%', ...otherProps}) {
    return (
        <Screen>
            <View style={[styles.container, {width}]}>
                {iconSource && <Icon style={styles.icon} iconSource={iconSource} backgroundColor={defaultStyles.colors.light} iconColor={defaultStyles.colors.grey} iconSize={40} />}
                <TextInput
                    placeholderTextColor={defaultStyles.colors.grey} 
                    style={defaultStyles.Text}{...otherProps}/>
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
        height: 60,
        alignItems: 'center'
    },
    icon:{
        marginRight: 10
    }
})
export default AppTextInput;