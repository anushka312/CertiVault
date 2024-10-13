import React, { useState } from 'react';
import './SignUpPage.css';

const SignUpPage = () => {
    const [showUserOptions, setShowUserOptions] = useState(false);
    const [showAdminOptions, setShowAdminOptions] = useState(false);

    const toggleUserOptions = () => {
        setShowUserOptions(!showUserOptions);
        setShowAdminOptions(false); // Hide admin options if visible
    };

    const toggleAdminOptions = () => {
        setShowAdminOptions(!showAdminOptions);
        setShowUserOptions(false); // Hide user options if visible
    };

    return (
        <div className="signup-page">
            <h1 className="signup-heading">Sign Up</h1>
            <div className="signup-options">
                <div className="option-button" onClick={toggleUserOptions}>
                    Sign up as User
                </div>
                {showUserOptions && (
                    <div className="dropdown-options">
                        <div className="dropdown-button email-button">Sign up with Email</div>
                        <div className="dropdown-button google-button">Sign up with Google</div>
                    </div>
                )}
                <div className="option-button" onClick={toggleAdminOptions}>
                    Sign up as Admin
                </div>
                {showAdminOptions && (
                    <div className="dropdown-options">
                        <div className="dropdown-button email-button">Sign up with Email</div>
                        <div className="dropdown-button google-button">Sign up with Google</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SignUpPage;
