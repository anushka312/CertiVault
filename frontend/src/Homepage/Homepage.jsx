import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Assuming you have styles in a separate file

const HomePage = () => {
  const navigate = useNavigate();

  // Function to navigate to the Sign Up page
  const handleSignUpRedirect = () => {
    navigate('/signup');
  };

  return (
    <div className="homepage">
      <h1>Welcome to CertiVault</h1>
      <button className="signup-button" onClick={handleSignUpRedirect}>
        Sign Up
      </button>
    </div>
  );
};

export default HomePage;
