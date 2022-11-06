import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCnhLQQ5J7eJNO9l5BswI151Byya4_yEvQ",
    authDomain: "thepowerquizapp.firebaseapp.com",
    projectId: "thepowerquizapp",
    storageBucket: "thepowerquizapp.appspot.com",
    messagingSenderId: "977585533909",
    appId: "1:977585533909:web:70fc6fab5b5a5ef47c835c",
    measurementId: "G-43VPYBJFT6"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = app.auth();
const storage = app.storage();

export { db, auth, storage };
firebase.firestore().settings({ experimentalForceLongPolling: true, merge: true });