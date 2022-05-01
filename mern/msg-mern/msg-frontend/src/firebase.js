import { getAuth, GoogleAuthProvider } from 'firebase/auth';        // for authentication
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC57pOmk-E6rz6_Hik01pyQLmVqcSLQDB0",
  authDomain: "da-mern.firebaseapp.com",
  projectId: "da-mern",
  storageBucket: "da-mern.appspot.com",
  messagingSenderId: "254629809602",
  appId: "1:254629809602:web:1457de84bfff414a0dda5b",
  measurementId: "G-WQSJJKDNBM"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { auth, provider };
export default db;