import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAD2UH-Z1hN4WcV1ip6hkE9hNXLrZK5-8g",
    authDomain: "react-course-13b32.firebaseapp.com",
    databaseURL: "https://react-course-13b32.firebaseio.com",
    projectId: "react-course-13b32",
    storageBucket: "react-course-13b32.appspot.com",
    messagingSenderId: "700465524794",
    appId: "1:700465524794:web:2e9757d35532438ee8c503"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { db, googleAuthProvider, firebase }