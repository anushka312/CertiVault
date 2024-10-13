import React, { useState } from 'react';
import './SignUpPage.css';
import UserSignUpForm from './UserSignUpForm';
import AdminSignUpForm from './AdminSignUpForm';

const SignUpPage = () => {
    const [step, setStep] = useState('select'); // 'select', 'user-email', 'user-google', 'admin-email', 'admin-google'
    const [dropdown, setDropdown] = useState(null);

    // Handle dropdowns for user and admin
    const handleUserDropdown = () => {
        setDropdown(dropdown === 'user' ? null : 'user');
    };

    const handleAdminDropdown = () => {
        setDropdown(dropdown === 'admin' ? null : 'admin');
    };

    // Handle form rendering
    const handleUserEmailForm = () => setStep('user-email');
    const handleAdminEmailForm = () => setStep('admin-email');

    return (
        <div className="signup-page">
            {step === 'select' && (
                <>
                    <h1 className="signup-heading">SIGN UP</h1>
                    <div className="signup-options">
                        <div className="option-button" onClick={handleUserDropdown}>
                            Sign up as User
                        </div>
                        {dropdown === 'user' && (
                            <div className="dropdown-options">
                                <div className="dropdown-option" onClick={handleUserEmailForm}>
                                    Sign up with Email
                                </div>
                                <div className="dropdown-option" onClick={() => alert('Redirect to Google Sign-Up')}>
                                    Sign up with Google
                                </div>
                            </div>
                        )}

                        <div className="option-button" onClick={handleAdminDropdown}>
                            Sign up as Admin
                        </div>
                        {dropdown === 'admin' && (
                            <div className="dropdown-options">
                                <div className="dropdown-option" onClick={handleAdminEmailForm}>
                                    Sign up with Email
                                </div>
                                <div className="dropdown-option" onClick={() => alert('Redirect to Google Sign-Up')}>
                                    Sign up with Google
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}

            {step === 'user-email' && <UserSignUpForm />}
            {step === 'admin-email' && <AdminSignUpForm />}
        </div>
    );
};

export default SignUpPage;
