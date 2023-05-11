// Import the functions you need from the SDKs you need
const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF3pO2u2gOY5zpT3FeCsoNXcg2MuEZBOw",
  authDomain: "threadly-386216.firebaseapp.com",
  projectId: "threadly-386216",
  storageBucket: "threadly-386216.appspot.com",
  messagingSenderId: "1051671905011",
  appId: "1:1051671905011:web:9cfb43a29a1e799cf56d86",
  measurementId: "G-JECNXE6T8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

module.exports = { db };