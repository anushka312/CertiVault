import React, { useState } from "react";
import UserSignUpForm from "./UserSignUpForm";
import AdminSignUpForm from "./AdminSignUpForm";
import GoogleSignIn from "./GoogleSignIn";
import EmailPopup from "./EmailPopup";
import OTPVerification from "./OTPVerification";
import emailIcon from "../../assets/Screenshot 2024-10-13 142652 (2).svg";

const SignUpPage = () => {
  const [step, setStep] = useState("select");
  const [dropdown, setDropdown] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [isOTPVerified, setIsOTPVerified] = useState(false);
  const [email, setEmail] = useState("");

  const handleUserDropdown = () =>
    setDropdown(dropdown === "user" ? null : "user");
  const handleAdminDropdown = () =>
    setDropdown(dropdown === "admin" ? null : "admin");
  const handleUserEmailForm = () => setStep("user-email");
  const handleAdminEmailForm = () => setStep("admin-email");
  const handleGoogleSignInSuccess = (user, role) => {
    setUserData(user);
    setStep(role === "user" ? "user-google" : "admin-google");
  };
  const handleOTPVerificationSuccess = () => {
    setIsOTPVerified(true);
    setStep(step === "user-email" ? "user-email-form" : "admin-email-form");
  };
  const handleEmailSubmit = async (submittedEmail) => {
    setEmail(submittedEmail);
    try {
      const response = await fetch("http://localhost:5000/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: submittedEmail }),
      });
      const result = await response.json();
      if (result.success) setIsOTPSent(true);
      else alert("Failed to send OTP. Please try again.");
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-sky-100 font-sans p-5">
      <div className="flex flex-col items-center w-full max-w-md bg-white p-6 rounded-lg shadow-lg border-b-4 border-purple-700">
        {step === "select" && (
          <>
            <h1 className="text-3xl font-bold text-black mb-10">Sign Up</h1>
            <div className="flex flex-col items-center gap-5">
              <div
                onClick={handleUserDropdown}
                className="w-64 text-center bg-blue-600 text-white py-4 rounded-lg cursor-pointer text-lg transition-colors duration-300 hover:bg-blue-800"
              >
                Sign up as User
              </div>
              {dropdown === "user" && (
                <div className="flex flex-col bg-white border border-gray-300 rounded-md mt-2 p-2 shadow-lg w-64">
                  <div
                    onClick={handleUserEmailForm}
                    className="flex items-center p-2 text-blue-600 cursor-pointer text-center border-b border-gray-200 hover:bg-gray-100"
                  >
                    <img src={emailIcon} alt="email icon" />
                  </div>
                  <div className="p-2">
                    <GoogleSignIn
                      onSuccess={(user) =>
                        handleGoogleSignInSuccess(user, "user")
                      }
                    />
                  </div>
                </div>
              )}

              <div
                onClick={handleAdminDropdown}
                className="w-64 text-center bg-blue-600 text-white py-4 rounded-lg cursor-pointer text-lg transition-colors duration-300 hover:bg-blue-800"
              >
                Sign up as Admin
              </div>
              {dropdown === "admin" && (
                <div className="flex flex-col bg-white border border-gray-300 rounded-md mt-2 p-2 shadow-lg w-64">
                  <div
                    onClick={handleAdminEmailForm}
                    className="flex items-center p-2 text-blue-600 cursor-pointer text-center border-b border-gray-200 hover:bg-gray-100"
                  >
                    <img src={emailIcon} alt="email icon" />
                  </div>
                  <div className="p-2">
                    <GoogleSignIn
                      onSuccess={(user) =>
                        handleGoogleSignInSuccess(user, "admin")
                      }
                    />
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {(step === "user-email" || step === "admin-email") && (
          <EmailPopup onSubmit={handleEmailSubmit} />
        )}

        {isOTPSent && !isOTPVerified && (
          <OTPVerification
            email={email}
            onSuccess={handleOTPVerificationSuccess}
          />
        )}

        {step === "user-email-form" && <UserSignUpForm />}
        {step === "admin-email-form" && <AdminSignUpForm />}
        {step === "user-google" && (
          <UserSignUpForm googleData={userData} isGoogle={true} />
        )}
        {step === "admin-google" && (
          <AdminSignUpForm googleData={userData} isGoogle={true} />
        )}
      </div>
    </div>
  );
};

export default SignUpPage;
