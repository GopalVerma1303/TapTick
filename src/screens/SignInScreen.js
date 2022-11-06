import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/theme';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { useNavigation } from '@react-navigation/core';
import { signIn } from '../../utils/Auth';

const SignInScreen = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handleOnSubmit = () => {
        if (email != '' && password != '') {
            signIn(email, password);
        }
    };

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{
            backgroundColor: COLORS.white,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 20,
        }}>
            <Text style={{
                fontSize: 24,
                color: COLORS.black,
                fontWeight: 'bold',
                marginVertical: 32,
            }}>
                Sign In
            </Text>
            <FormInput
                labelText="Email"
                placeholderText="Enter your Email"
                onChangeText={value => setemail(value)}
                value={email}
                keyboardType={'email-address'}
            />
            <FormInput
                labelText="Password"
                placeholderText="Enter your Password"
                onChangeText={value => setpassword(value)}
                value={password}
                secureTextEntry={true}
            />
            <FormButton labelText="Submit" handleOnPress={handleOnSubmit} style={{ width: '100%' }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                <Text>Don't have an account?</Text>
                <Text
                    style={{ marginLeft: 4, color: COLORS.primary }}
                    onPress={() => navigation.navigate('SignUpScreen')}>
                    Create account
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default SignInScreen

const styles = StyleSheet.create({})