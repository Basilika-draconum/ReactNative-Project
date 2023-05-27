// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJOyYnv5DqyMDs4rA9Mdk6Mf6QCVgPKtY",
  authDomain: "reactnative-project-1407.firebaseapp.com",
  projectId: "reactnative-project-1407",
  storageBucket: "reactnative-project-1407.appspot.com",
  messagingSenderId: "219764693477",
  appId: "1:219764693477:web:c4b4583b448250fa3b770c",
  measurementId: "G-BVLNDKWKHK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
