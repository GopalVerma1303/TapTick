import React, { useState } from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    ScrollView,
    ToastAndroid,
    TouchableOpacity,
    Image,
    StyleSheet,
    Alert
} from 'react-native';
import { COLORS } from '../constants/theme';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { createQuestion } from '../../utils/database';
import * as ImagePicker from 'expo-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import { storage } from '../../firebase';

const AddQuestionScreen = ({ navigation, route }) => {
    const [currentQuizId, setCurrentQuizId] = useState(
        route.params.currentQuizId,
    );
    const [currentQuizTitle, setCurrentQuizTitle] = useState(
        route.params.currentQuizTitle,
    );
    const [question, setQuestion] = useState('');
    const [imageUri, setImageUri] = useState('');

    const [correctAnswer, setCorrectAnswer] = useState('');
    const [optionTwo, setOptionTwo] = useState('');
    const [optionThree, setOptionThree] = useState('');
    const [optionFour, setOptionFour] = useState('');

    const handleQuestionSave = async () => {
        if (
            question == '' ||
            correctAnswer == '' ||
            optionTwo == '' ||
            optionThree == '' ||
            optionFour == ''
        ) {
            return;
        }

        let currentQuestionId = Math.floor(
            100000 + Math.random() * 9000,
        ).toString();

        // Add question to db
        await createQuestion(currentQuizId, currentQuestionId, {
            question: question,
            correct_answer: correctAnswer,
            incorrect_answers: [optionTwo, optionThree, optionFour],
            imageUrl: imageUri,
        });
        ToastAndroid.show('Question saved', ToastAndroid.SHORT);

        // Reset
        setQuestion('');
        setCorrectAnswer('');
        setOptionTwo('');
        setOptionThree('');
        setOptionFour('');
        setImageUri('');
    };

    return (
        <KeyboardAvoidingView
            style={{
                flex: 1,
                PaddingTop: 20,
            }}>
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
                }}>
                <View style={{ padding: 20 }}>
                    <Text
                        style={{ fontSize: 20, textAlign: 'center', color: COLORS.black }}>
                        Add Question
                    </Text>
                    <Text style={{ textAlign: 'center', marginBottom: 20 }}>
                        For {currentQuizTitle}
                    </Text>

                    <FormInput
                        labelText="Question"
                        placeholderText="Enter Question"
                        onChangeText={val => setQuestion(val)}
                        value={question}
                    />

                    <FormInput
                        labelText="Image URL"
                        placeholderText="Enter Question Image URL"
                        onChangeText={val => setImageUri(val)}
                        value={imageUri}
                    />

                    {/* Options */}

                    <FormInput
                        labelText="Correct Answer"
                        onChangeText={val => setCorrectAnswer(val)}
                        placeholderText="Enter Correct Answer"
                        value={correctAnswer}
                    />
                    <FormInput
                        labelText="Option 2"
                        onChangeText={val => setOptionTwo(val)}
                        placeholderText="Enter Option 2"
                        value={optionTwo}
                    />
                    <FormInput
                        labelText="Option 3"
                        onChangeText={val => setOptionThree(val)}
                        placeholderText="Enter Option 3"
                        value={optionThree}
                    />
                    <FormInput
                        labelText="Option 4"
                        onChangeText={val => setOptionFour(val)}
                        placeholderText="Enter Option 4"
                        value={optionFour}
                    />

                    <FormButton
                        labelText="Save Question"
                        handleOnPress={handleQuestionSave}
                    />
                    <FormButton
                        labelText="Done & Go Home"
                        isPrimary={false}
                        handleOnPress={() => {
                            setCurrentQuizId('');
                            navigation.navigate('HomeScreen');
                        }}
                        style={{
                            marginVertical: 20,
                        }}
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default AddQuestionScreen

const styles = StyleSheet.create({})