import React, { useState } from "react";
import "./SignUpPage.css";
import UserSignUpForm from "./UserSignUpForm";
import AdminSignUpForm from "./AdminSignUpForm";


const SignUpPage = () => {
  const [step, setStep] = useState("select");
  const [dropdown, setDropdown] = useState(null);

  const handleUserDropdown = () => {
    setDropdown(dropdown === "user" ? null : "user");
  };

  const handleAdminDropdown = () => {
    setDropdown(dropdown === "admin" ? null : "admin");
  };

  const handleUserEmailForm = () => setStep("user-email");
  const handleAdminEmailForm = () => setStep("admin-email");

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info: ", user);
      // Here, you can handle the user info, e.g., save it to your database.
    } catch (error) {
      console.error("Error signing in with Google: ", error.message);
    }
  };

  return (
    <div className="signup-page">
      <div className="form-container">
        {step === "select" && (
          <>
            <h1 className="signup-heading">Sign Up</h1>
            <div className="signup-options">
              <div className="option-button" onClick={handleUserDropdown}>
                Sign up as User
              </div>
              {dropdown === "user" && (
                <div className="dropdown-options">
                  <div
                    className="dropdown-option"
                    onClick={handleUserEmailForm}
                  >
                    Sign up with Email
                  </div>
                  <div className="dropdown-option" onClick={signInWithGoogle}>
                    Sign up with Google
                  </div>
                </div>
              )}

              <div className="option-button" onClick={handleAdminDropdown}>
                Sign up as Admin
              </div>
              {dropdown === "admin" && (
                <div className="dropdown-options">
                  <div
                    className="dropdown-option"
                    onClick={handleAdminEmailForm}
                  >
                    Sign up with Email
                  </div>
                  <div className="dropdown-option" onClick={signInWithGoogle}>
                    Sign up with Google
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {step === "user-email" && <UserSignUpForm />}
        {step === "admin-email" && <AdminSignUpForm />}
      </div>
    </div>
  );
};

export default SignUpPage;
