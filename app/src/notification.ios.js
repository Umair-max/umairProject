import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification, {Importance} from 'react-native-push-notification';

const showLocalNotification = async (title, message) => {

    PushNotification.createChannel({
        channelId: '',
        channelName : '',
        channelDescription :'',
        importance : Importance.HIGH,
        playSound : true

    })

    PushNotification.localNotification({
        channelId : '',
        id : 23,
        title : title,
        message : message,
        date : new Date(),
        allowWhileIdle : true      
    })   
};

const showNotification = async (title, message) => {
    var temp = PushNotificationIOS.addNotificationRequest({
        title: title,
        body: message, 
    });

    console.log(' - - -  ', temp)
}

const sheduleNotification = (title, message) => {
    PushNotification
    const data = new Date();
    data.setSeconds(data.getSeconds() + 5)
    PushNotificationIOS.addNotificationRequest({
        title: title,
        body: message,
        fireDate: data.toISOString(),
    });
};

export {
    showLocalNotification,
    sheduleNotification,
    showNotification
};