import React from 'react';
import { View, StyleSheet, Image, Text, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';
import colors from '../../config/colors';

function ListItem({title, description, image, onPress, onDelete, IconComponent}) {
    return (
        <TouchableHighlight
            underlayColor={colors.light}
            onPress={onPress}>
            <View style={styles.container}>
                {IconComponent}
                {image && <Image style={styles.image} source={image}/>}
                <View style={styles.details}>
                    <Text 
                        style={styles.title}
                        numberOfLines={1}
                    >{title}</Text>
                    { description && 
                    <Text 
                        style={styles.description} 
                        numberOfLines={2}
                    >{description}</Text>}
                </View>
                <TouchableWithoutFeedback 
                    onPress={onDelete}>
                    <Image
                        style={styles.trash} 
                        source={require('../../assets/trash-can.png')}>
                    </Image>
                </TouchableWithoutFeedback>
            </View>
        </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginHorizontal: 20
    },
    details:{
        flex: 1,
        justifyContent: 'center',
        marginLeft: 10
    },
    title:{
        fontWeight: 'bold',
    },
    description: {
        color: colors.grey
    },
    trash: {
        width: 30,
        height: 30,
        right: 20,
        alignSelf: 'center'
    }
})
export default ListItem;