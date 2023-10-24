// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5M2HLFK29bpk2bQuE_XBMfqn0COHKvUM",
  authDomain: "react-udemy-4e59e.firebaseapp.com",
  projectId: "react-udemy-4e59e",
  storageBucket: "react-udemy-4e59e.appspot.com",
  messagingSenderId: "660337401034",
  appId: "1:660337401034:web:78ac2f388590e4f7c52833"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseDB = getFirestore(FirebaseApp);
export const FirebaseAuth = getAuth(FirebaseApp);