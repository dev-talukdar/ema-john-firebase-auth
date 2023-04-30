// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDaX7bjCEBNhj_MlLRlNF7v7Vdcwqrs2k",
  authDomain: "ema-john-firebase-auth-420f0.firebaseapp.com",
  projectId: "ema-john-firebase-auth-420f0",
  storageBucket: "ema-john-firebase-auth-420f0.appspot.com",
  messagingSenderId: "29135614918",
  appId: "1:29135614918:web:4bccc9a2dd08b923c0f8c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;