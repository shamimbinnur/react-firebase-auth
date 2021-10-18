// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-auth-development-809ab.firebaseapp.com",
  projectId: "react-auth-development-809ab",
  storageBucket: "react-auth-development-809ab.appspot.com",
  messagingSenderId: "109767041688",
  appId: "1:109767041688:web:ebbb9071a4aa0a3f3826ed"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)





export default app;