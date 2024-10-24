import React from 'react';
import './SignUpPage.css';

const AdminSignUpForm = ({ googleData, isGoogle }) => {
    return (
        <div className="form-container">
            <h2>Enter admin details</h2>
            <form className="signup-form">
                <label>Full Name</label>
                <input type="text" defaultValue={isGoogle ? googleData.displayName : ''} placeholder="Enter your full name" required />

                <label>University Name</label>
                <input type="text" placeholder="Enter your university name" required />

                <label>Admin ID</label>
                <input type="text" placeholder="Enter your admin ID" required />

                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" required />

                <label>Email ID</label>
                <input type="email" defaultValue={isGoogle ? googleData.email : ''} placeholder="Enter your email" required />

                {/* Remove the security pin field for Google sign-in */}
                {!isGoogle && (
                    <>
                        <label>Set Security Pin (6 digits)</label>
                        <input type="password" maxLength="6" placeholder="Set your 6-digit pin" required />
                    </>
                )}

                <button type="submit" className="submit-button">Submit</button> {/* Change button to 'Submit' */}
            </form>
        </div>
    );
};

export default AdminSignUpForm;
