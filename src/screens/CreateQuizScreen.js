import { SafeAreaView, StyleSheet, Text, View, StatusBar, Alert } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants/theme';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { createQuiz } from '../../utils/database';
import { ToastAndroid } from 'react-native';


const CreateQuizScreen = ({ navigation }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleQuizSave = async () => {
        const currentQuizId = Math.floor(100000 + Math.random() * 9000).toString();
        // Save to firestore
        if (title != "" && description != "") {
            await createQuiz(currentQuizId, title, description);
            // Navigate to Add Question string
            navigation.navigate('AddQuestionScreen', {
                currentQuizId: currentQuizId,
                currentQuisTitle: title,
            });
            // Reset
            setTitle('');
            setDescription('');
            ToastAndroid.show('Quiz Saved', ToastAndroid.SHORT);
        } else {
            Alert.alert("Invalid Quiz")
        }
    };
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
                padding: 20,
            }}>
            <Text
                style={{
                    fontSize: 20,
                    textAlign: 'center',
                    marginVertical: 20,
                    fontWeight: 'bold',
                    color: COLORS.black,
                }}>
                Create Quiz
            </Text>
            <FormInput
                labelText="Title"
                placeholderText="Enter Quiz Title"
                onChangeText={val => setTitle(val)}
                value={title}
            />
            <FormInput
                labelText="Description"
                placeholderText="Enter Quiz Description"
                onChangeText={val => setDescription(val)}
                value={description}
            />
            <FormButton labelText="Save Quiz" handleOnPress={handleQuizSave} />
        </SafeAreaView>
    )
}

export default CreateQuizScreen

const styles = StyleSheet.create({})