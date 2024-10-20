import React, { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from './firebaseConfig'; // Ensure you're importing the initialized `auth` from firebase.js
import googleIcon from '../assets/web_light_sq_SU.svg';
import './GoogleSignIn.css';

const GoogleSignIn = ({ onSuccess }) => {
    const [error, setError] = useState(null); // State to handle errors

    // Async function to handle Google Sign-In
    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('Google Login Successful:', user);
            alert(`Welcome ${user.displayName}!`);
            onSuccess(user); // Pass user data to the parent component
        } catch (error) {
            console.error('Error signing in with Google:', error);
            setError(error.message); // Update error state with the error message
        }
    };

    return (
        <div>
            <img src={googleIcon} alt="Google Icon"  onClick={handleGoogleSignIn}/>
            
            {error && <p className="error-message">Error: {error}</p>}
        </div>
    );
};

export default GoogleSignIn;
