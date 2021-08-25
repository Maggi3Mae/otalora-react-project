import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyCTDD_pkMW3lODLYnpUUztz376BWvunMic",
    authDomain: "token-store-23fd7.firebaseapp.com",
    projectId: "token-store-23fd7",
    storageBucket: "token-store-23fd7.appspot.com",
    messagingSenderId: "632922696137",
    appId: "1:632922696137:web:6ba8e4c84d6ae952f52018"
  };
  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app

export const getFirestore = () => firebase.firestore(app)