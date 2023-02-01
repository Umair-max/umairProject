import React from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import AppText from './AppText';
import Icon from './Icon';

function CategoryPickerItem({item, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Icon 
                    backgroundColor={item.backgroundColor}
                    value={item.value}
                    iconSize={80}  
                    iconSource={item.iconSource}             
                />
                <AppText styls={styles.text}>{item.label}</AppText>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: 'center',
        width: '33%'
    },
    text: {
        marginTop: 5,
        textAlign: 'center'
    }
})
export default CategoryPickerItem;