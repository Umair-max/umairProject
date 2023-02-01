import React, { useContext } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon'
import ListItemSeparator from '../components/lists/ListItemSeparator';
import SimpleListItem from '../components/lists/SimpleListItem';
import AuthContaxt from '../auth/context';
import authStorage from '../auth/storage';
import useAuth from '../auth/useAuth';

const menuItems = [
    {
        title: 'My Lisitngs',
        icon: {
            iconSource: require('../assets/list.png'),
            backgroundColor: colors.primaryRed
        },
    },
    {
        title: 'My Messages',
        icon: {
            iconSource: require('../assets/email.png'),
            backgroundColor: colors.primaryGreen
        },
        targetScreen: 'Messages'
    }
]

function AccountScreen({navigation}) {
    const {user, logout} = useAuth( );

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <SimpleListItem 
                    title={user.name}
                    description={user.email}
                    image={require('../assets/mosh.jpg')}/>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuitem => menuitem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({item}) => 
                        <SimpleListItem
                            title={item.title}
                            onPress={() => navigation.navigate(item.targetScreen)}
                            IconComponent={
                                <Icon 
                                    iconSource={item.icon.iconSource}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    }
                />
            </View>
            <SimpleListItem 
                title='Logout'
                onPress={() => logout()}
                IconComponent={
                    <Icon 
                        iconSource={require('../assets/exit.png')}
                        backgroundColor={colors.grey}
                    />
                }/>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        paddingVertical: 20
    },
    screen: {
        backgroundColor: colors.light,
        flex: 1
    }
})
export default AccountScreen;