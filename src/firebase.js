// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDfiDgObIV96yOwnaWtlCuu7SsIbiV0XMs",
    authDomain: "whatmave-mern.firebaseapp.com",
    projectId: "whatmave-mern",
    storageBucket: "whatmave-mern.appspot.com",
    messagingSenderId: "497167383643",
    appId: "1:497167383643:web:7407de62be5a15aed1137e",
    measurementId: "G-6R0L310HKZ"
  };

const firebaseApp =firebase.initializeApp
(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
