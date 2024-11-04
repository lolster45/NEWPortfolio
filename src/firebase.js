// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3X9h7zTK8Fl7x2zXnrOsJcoWpYMxLDSg",
  authDomain: "myportfolio-53827.firebaseapp.com",
  projectId: "myportfolio-53827",
  storageBucket: "myportfolio-53827.firebasestorage.app",
  messagingSenderId: "801621328741",
  appId: "1:801621328741:web:c3efb7ef85f3d9ecf8d78c",
  measurementId: "G-G9CS71PX1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);