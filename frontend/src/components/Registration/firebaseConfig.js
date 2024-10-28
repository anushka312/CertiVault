// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your Firebase configuration (from the Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyCeE66pmCOb1R33NPJUMLJhvPMOCWG_XW8",
  authDomain: "certivault.firebaseapp.com",
  projectId: "certivault",
  storageBucket: "certivault.appspot.com",
  messagingSenderId: "466862418588",
  appId: "1:466862418588:web:93f3eb972ae1aa570c9b59",
  measurementId: "G-1TNT7D447G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
