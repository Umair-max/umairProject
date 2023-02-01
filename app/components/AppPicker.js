import React, {useState} from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button} from 'react-native';


import Screen from './Screen';
import defaultStyles from '../config/styles'

import Icon from './Icon'
import AppText from './AppText';
import { FlatList } from 'react-native-gesture-handler';
import PickerItems from './PickerItems';

function AppPicker({
    iconSource,
    placeholder,
    items,
    selectedItem,
    onSelectItem,
    width='100%', 
    numberOfColumns=1,
    PickerItemComponent = PickerItems,
}) {
    const [visible, setModalVisible ] = useState(false)
    return (
        <Screen>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, {width}]}>
                    {iconSource && 
                    <Icon 
                        style={styles.icon} 
                        iconSource={iconSource} 
                        backgroundColor={defaultStyles.colors.light} 
                        iconColor={defaultStyles.colors.black} 
                        iconSize={40} 
                    />}
                    {selectedItem ? (
                        <AppText style={styles.text}>{selectedItem.label}</AppText>
                    ) : (
                        <AppText style={styles.placeholder}>{placeholder}</AppText>
                    )}                    
                    <Icon 
                        iconSource={require('../assets/chevron.png')} 
                        backgroundColor={defaultStyles.colors.light} 
                        iconColor={defaultStyles.colors.black} 
                        iconSize={40}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={visible} animationType='slide'>
                <Screen>
                    <Button  title='Close' onPress={() => setModalVisible(false)}/>
                    <FlatList 
                        data={items}
                        keyExtractor={item =>  item.id}
                        numColumns={numberOfColumns}
                        renderItem={({item}) =>
                            <PickerItemComponent
                                item={item}
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false)
                                    onSelectItem(item)}}
                            />
                    }/>
                </Screen>
            </Modal>
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
    placeholder:{
        color : defaultStyles.colors.grey,
        flex: 1
    },
    text:{
        flex: 1
    },
    icon:{
        marginRight: 10
    }
})
export default AppPicker;