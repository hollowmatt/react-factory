import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore

const firebaseConfig = {
  apiKey: "AIzaSyC57pOmk-E6rz6_Hik01pyQLmVqcSLQDB0",
  authDomain: "da-mern.firebaseapp.com",
  projectId: "da-mern",
  storageBucket: "da-mern.appspot.com",
  messagingSenderId: "254629809602",
  appId: "1:254629809602:web:1457de84bfff414a0dda5b",
  measurementId: "G-WQSJJKDNBM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export { auth, provider }
export default db