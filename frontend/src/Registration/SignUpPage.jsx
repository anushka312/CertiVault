import React, { useState } from 'react';
import './SignUpPage.css';
import UserSignUpForm from './UserSignUpForm';
import AdminSignUpForm from './AdminSignUpForm';
import GoogleSignIn from './GoogleSignIn';
import EmailPopup from './EmailPopup';
import OTPVerification from './OTPVerification'; // Import OTPVerification
import emailIcon from '../assets/Screenshot 2024-10-13 142652 (2).svg';

const SignUpPage = () => {
    const [step, setStep] = useState('select');
    const [dropdown, setDropdown] = useState(null);
    const [userData, setUserData] = useState(null);
    const [isOTPSent, setIsOTPSent] = useState(false);
    const [isOTPVerified, setIsOTPVerified] = useState(false);
    const [email, setEmail] = useState('');

    // Handle dropdowns
    const handleUserDropdown = () => setDropdown(dropdown === 'user' ? null : 'user');
    const handleAdminDropdown = () => setDropdown(dropdown === 'admin' ? null : 'admin');

    // Handle form rendering
    const handleUserEmailForm = () => setStep('user-email');
    const handleAdminEmailForm = () => setStep('admin-email');

    // Handle Google Sign-In success
    const handleGoogleSignInSuccess = (user, role) => {
        setUserData(user);
        if (role === 'user') {
            setStep('user-google');
        } else if (role === 'admin') {
            setStep('admin-google');
        }
    };

    // Handle OTP verification success
    const handleOTPVerificationSuccess = () => {
        setIsOTPVerified(true);
        if (step === 'user-email') {
            setStep('user-email-form');
        } else if (step === 'admin-email') {
            setStep('admin-email-form');
        }
    };

    // Handle email submission (to send OTP)
    const handleEmailSubmit = async (submittedEmail) => {
        setEmail(submittedEmail);
        try {
            const response = await fetch('http://localhost:5000/send-otp', { // Use your backend URL
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: submittedEmail }),
            });
            const result = await response.json();
            if (result.success) {
                setIsOTPSent(true); // Show OTP popup
            } else {
                alert('Failed to send OTP. Please try again.');
            }
        } catch (error) {
            console.error('Error sending OTP:', error);
        }
    };

    return (
        <div className="signup-page">
            <div className="form-container">
                {step === 'select' && (
                    <>
                        <h1 className="signup-heading">Sign Up</h1>
                        <div className="signup-options">
                            <div className="option-button" onClick={handleUserDropdown}>
                                Sign up as User
                            </div>
                            {dropdown === 'user' && (
                                <div className="dropdown-options">
                                    <div className="dropdown-option" onClick={handleUserEmailForm}>
                                        <img src={emailIcon} alt="emailicon" />
                                    </div>
                                    <div className="dropdown-option">
                                        <GoogleSignIn onSuccess={(user) => handleGoogleSignInSuccess(user, 'user')} />
                                    </div>
                                </div>
                            )}

                            <div className="option-button" onClick={handleAdminDropdown}>
                                Sign up as Admin
                            </div>
                            {dropdown === 'admin' && (
                                <div className="dropdown-options">
                                    <div className="dropdown-option" onClick={handleAdminEmailForm}>
                                    <img src={emailIcon} alt="emailicon" />
                                    </div>
                                    <div className="dropdown-option">
                                        <GoogleSignIn onSuccess={(user) => handleGoogleSignInSuccess(user, 'admin')} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                )}

                {/* Email submission popup */}
                {(step === 'user-email' || step === 'admin-email') && (
                    <EmailPopup onSubmit={handleEmailSubmit} />
                )}

                {/* OTP verification popup */}
                {isOTPSent && !isOTPVerified && (
                    <OTPVerification email={email} onSuccess={handleOTPVerificationSuccess} />
                )}

                {/* Render the sign-up form only after OTP is verified */}
                {step === 'user-email-form' && <UserSignUpForm />}
                {step === 'admin-email-form' && <AdminSignUpForm />}
                {step === 'user-google' && <UserSignUpForm googleData={userData} isGoogle={true} />}
                {step === 'admin-google' && <AdminSignUpForm googleData={userData} isGoogle={true} />}
            </div>
        </div>
    );
};

export default SignUpPage;
