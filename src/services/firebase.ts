// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV2Z4M5cNd8hMhIh6V7MMW8YcenrmESik",
  authDomain: "conveccao-364102.firebaseapp.com",
  projectId: "conveccao-364102",
  storageBucket: "conveccao-364102.appspot.com",
  messagingSenderId: "617880548583",
  appId: "1:617880548583:web:6f3a746f1e2032e4c7de42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);