// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "coursecraft-ai.firebaseapp.com",
  projectId: "coursecraft-ai",
  storageBucket: "coursecraft-ai.firebasestorage.app",
  messagingSenderId: "424027542454",
  appId: "1:424027542454:web:e2c65b4968979e93736717",
  measurementId: "G-KNS1WH56QW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);