import React, { useState } from 'react';
import * as Yup from 'yup'
import { StyleSheet } from 'react-native';

import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import Screen from '../components/Screen';
import useAuth from '../auth/useAuth';
import usersApi from '../api/users';

const validationSchema= Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

function RegisterScreen(props) {
    const auth = useAuth();
    const [error, setError] = useState();

    const handleSubmit = async (userInfo) => {
        const result = usersApi.register(userInfo);

        if (!result.ok) {
            if (result.ok) setError(result.data.error);
            else {
                setError('an unexpected error occured.');
                console.log(result);
            }
            return;
        }

        const {data: authToken} = auth.login(
            userInfo.email,
            userInfo.password
        );
        auth.login(authToken);
    }

    return (
        <Screen style={styles.container}>
            <AppForm 
                initialValues={{name: '', email: '', password: ''}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <AppFormField 
                    name='name'
                    iconSource={require('../assets/user.png')}
                    placeholder="Name"
                    autoCapitalize= 'none'
                    autoCorrect={false}
                    textContentType='name'
                />
                <AppFormField 
                    name='email'
                    iconSource={require('../assets/email.png')}
                    placeholder="Email"
                    autoCapitalize= 'none'
                    autoCorrect={false}
                    keyboardType={'email-address'}
                    textContentType='emailAdress'
                />
                <AppFormField 
                    name='password'
                    iconSource={require('../assets/lock.png')}
                    placeholder="Password"
                    autoCapitalize= 'none'
                    autoCorrect={false}
                    textContentType='password'
                    secureTextEntry
                />
                <SubmitButton 
                    title='REGISTER'  
                />
            </AppForm>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 15
    }
})
export default RegisterScreen;