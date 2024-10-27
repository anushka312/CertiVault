// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeE66pmCOb1R33NPJUMLJhvPMOCWG_XW8",
  authDomain: "certivault.firebaseapp.com",
  projectId: "certivault",
  storageBucket: "certivault.appspot.com",
  messagingSenderId: "466862418588",
  appId: "1:466862418588:web:93f3eb972ae1aa570c9b59",
  measurementId: "G-1TNT7D447G"
};

// Initialize Firebase Authentication and get a reference to the service
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;