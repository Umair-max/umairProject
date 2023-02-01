import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import listingsApi from '../api/listings';
import Screen from '../components/Screen';
import Cards from '../components/Cards'
import colors from '../config/colors';


function ListingScreen({navigation}) {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadListings();
    }, []);

    const loadListings = async () => {
        setLoading(true)
        const response = await listingsApi.getListings();
        setLoading(false)
        console.log(response)
        setListings(response.data);
    };

    return (
        <Screen style={styles.container}>
            <ActivityIndicator visible={loading} />
            <FlatList 
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) =>
                    <Cards 
                        title={item.title}
                        imageUrl={item.images[0].url}
                        price={'$' + item.price} 
                        onPress={() => navigation.navigate('ItemDetail', item)}
                        thumbnailUrl={item.images[0].thumbnailUrl}
                    />
                }
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        padding: 20,
        flex: 1
    }
})
export default ListingScreen;