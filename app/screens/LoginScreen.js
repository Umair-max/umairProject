import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import AppForm from '../components/forms/AppForm';
import authApi from '../api/auth';
import ErrorMessage from '../components/forms/ErrorMessage';
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
    email : Yup.string().required().email().label('Email'),
    password : Yup.string().required().min(4).label('Password'),
})

function LoginScreen(props) {
    const {login} = useAuth();
    const [loginFailed, setLoginFailed] = useState(false)

    const handleSubmit = async ({email, password}) => {
        const result = await authApi.login(email, password);
        if (!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        login(result.data);
        
    }

    return (
        <Screen style={styles.container}>
            <Image 
                style={styles.logo}
                source={require('../assets/logo-red.png')} 
            />
            <ErrorMessage error={'Email and/or password is incorrect'} visible={loginFailed}/>
            <AppForm
                initialValues={{email: '', password: ''}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name='email'
                    iconSource={require('../assets/email.png')}
                    placeholder='Email'
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType={'email-address'}
                    textContentType='emailAdress'
                />
                <AppFormField
                    name='password'
                    iconSource={require('../assets/lock.png')}
                    placeholder='Password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry
                    textContentType='password'            
                />
                <SubmitButton 
                    title='Login'
                />
            </AppForm>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20 
    }
})
export default LoginScreen;