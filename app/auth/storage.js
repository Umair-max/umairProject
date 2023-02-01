import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';



const key = 'authToken'

const storeToken = async authToken => {
    try {
        await AsyncStorage.setItem(key, authToken);       
    } catch (error) {
        console.log('Error storing the authToken', error);
    }
}

const getToken = async () => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (error) {
        console.log('Error geting the authToken', error);
    }
}

const getUser = async () => {
    const token = await getToken();
    return (token) ? jwtDecode(token) : null;
}

const removeToken = async () => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log('Error removing the authToken', error);
    }
}

export default {
    storeToken,
    getUser,
    removeToken,
    getToken
};