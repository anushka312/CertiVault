import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUpPage from './Registration/SignUpPage'; // Your sign-up page
import UserSignUpForm from './Registration/UserSignUpForm'; // The form to sign up with email
import AdminSignUpForm from './Registration/AdminSignUpForm'; // Admin form

const Sign = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUpPage />} /> {/* This can be your main sign-up page */}
        <Route path="/user-email" element={<UserSignUpForm />} />
        <Route path="/admin-email" element={<AdminSignUpForm />} />
      </Routes>
    </div>
  );
};

export default Sign;
