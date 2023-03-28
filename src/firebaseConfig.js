// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxb2chkf0oyLDjdAV04rWae7srjHgyPig",
  authDomain: "todo-app-1a273.firebaseapp.com",
  projectId: "todo-app-1a273",
  storageBucket: "todo-app-1a273.appspot.com",
  messagingSenderId: "549833838273",
  appId: "1:549833838273:web:b93deb7340448010304e40",
  measurementId: "G-SJLPQ5CS2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);