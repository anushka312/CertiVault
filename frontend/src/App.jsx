import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from './Homepage/Homepage'; // Your homepage or login page
import SignUpPage from './Registration/SignUpPage'; // Your sign-up page
import UserSignUpForm from './Registration/UserSignUpForm'; // The form to sign up with email
import AdminSignUpForm from './Registration/AdminSignUpForm'; // Admin form

import "./App.css"; // Make sure the path to your CSS is correct
import CategoryPage from "./CategoryPage/CategoryPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for your pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signup/user-email" element={<UserSignUpForm />} />
        <Route path="/signup/admin-email" element={<AdminSignUpForm />} />
        <Route path="/categories" element={<CategoryPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
