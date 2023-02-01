import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import dayjs from 'dayjs';


const prefix = 'cache';
const expiryInMinutes = 5;

const store = async (key, value) => {
    const item = {
            value,
            timeStamp : Date.now()
    };

    try {       
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item));      
    } catch (error) {
        console.log(error)
    }
};
const isExpired = item => {
    const now = dayjs();
    const storedTime = dayjs(item.timeStamp);
    return now.diff(storedTime, 'minute') > expiryInMinutes;
}
const get = async key => {
    try {
        const value = await AsyncStorage.getItem(prefix + key);
        const item = JSON.parse(value);

        if (!item) return null;

        if (isExpired(item)) {
            await AsyncStorage.removeItem(prefix + key)
            return null;
        }
        return item.value;
    } catch (error) {
        console.log(error)
    }
};
export default{
    store,
    get
}