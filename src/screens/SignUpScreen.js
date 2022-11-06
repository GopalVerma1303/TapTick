import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/theme';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { useNavigation } from '@react-navigation/core';
import { auth } from '../../firebase';
import { signUp } from '../../utils/Auth';

const SignUpScreen = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleOnSubmit = () => {
        if (email != '' && password != '' && confirmPassword != '') {
            if (password == confirmPassword) {
                signUp(email, password)
            } else {
                Alert.alert("Invalid Email or Password");
            }
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
                Sign Up
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
            <FormInput
                labelText="Confirm Password"
                placeholderText="enter your password again"
                onChangeText={(value) => setConfirmPassword(value)}
                value={confirmPassword}
                secureTextEntry={true}
            />
            <FormButton labelText="Submit" handleOnPress={handleOnSubmit} style={{ width: '100%' }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                <Text>Already have an account?</Text>
                <Text
                    style={{ marginLeft: 4, color: COLORS.primary }}
                    onPress={() => navigation.navigate('SignInScreen')}>
                    Sign in
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({})