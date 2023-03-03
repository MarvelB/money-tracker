import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB0KamDpo6tABbK4E-SKpJgkwtW09fZ2YY",
    authDomain: "money-tracker-5849a.firebaseapp.com",
    projectId: "money-tracker-5849a",
    storageBucket: "money-tracker-5849a.appspot.com",
    messagingSenderId: "330711277263",
    appId: "1:330711277263:web:7311a1e046de0d9d3021ba"
};

// Initialize firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const projectFirestore = firebase.firestore();

const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp }