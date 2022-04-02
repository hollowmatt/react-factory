
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
  
const firebaseConfig = {
    apiKey: "AIzaSyDZkvtl7MngnOU14wvOIj8kqpR4W_Yi6Mc",
    authDomain: "fbqs-3da79.firebaseapp.com",
    projectId: "fbqs-3da79",
    storageBucket: "fbqs-3da79.appspot.com",
    messagingSenderId: "463856488450",
    appId: "1:463856488450:web:7633784fff74473a95171b",
    measurementId: "G-X19YW7MKHG"
};
  
const firebaseApp = initializeApp.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
  
export default db;
