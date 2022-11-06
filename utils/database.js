// import db from '@react-native-firebase/db';
import { db } from "../firebase";

export const createQuiz = (currentQuizId, title, description) => {
    return db.collection('Quizzes').doc(currentQuizId).set({
        title,
        description,
    });
};

// Create new question for current quiz
export const createQuestion = (currentQuizId, currentQuestionId, question) => {
    return db
        .collection('Quizzes')
        .doc(currentQuizId)
        .collection('QNA')
        .doc(currentQuestionId)
        .set(question);
};

// Get All Quizzes
export const getQuizzes = () => {
    return db.collection('Quizzes').get();
};

// Get Quiz Details by id
export const getQuizById = currentQuizId => {
    return db.collection('Quizzes').doc(currentQuizId).get();
};

// Get Questions by currentQuizId
export const getQuestionsByQuizId = currentQuizId => {
    return db
        .collection('Quizzes')
        .doc(currentQuizId)
        .collection('QNA')
        .get();
};