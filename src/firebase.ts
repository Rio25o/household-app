/* eslint-disable @typescript-eslint/no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFTKdLDR7aoPAftYy4xH0FO2AIEbn9qrs",
  authDomain: "household-app-56517.firebase.com",
  projectId: "household-app-56517",
  storageBucket: "household-app-56517.firebasestorage.app",
  messagingSenderId: "614892956056",
  appId: "1:614892956056:web:acf8f481f913d6b88123ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
