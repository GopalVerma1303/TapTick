import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CreateQuizScreen from '../screens/CreateQuizScreen';
import AddQuestionScreen from '../screens/AddQuestionScreen';
import PlayQuizScreen from '../screens/PlayQuizScreen';

const Stack = createStackNavigator();

const AppStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="CreateQuizScreen" component={CreateQuizScreen} />
            <Stack.Screen name="AddQuestionScreen" component={AddQuestionScreen} />
            <Stack.Screen name="PlayQuizScreen" component={PlayQuizScreen} />
        </Stack.Navigator>
    );
};

export default AppStackNavigator;