import React from 'react';
import './SignUpPage.css';

const AdminSignUpForm = () => {
    return (
        <div className="form-container">
            <h2>Enter admin details</h2>
            <form className="signup-form">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" required />

                <label>University Name</label>
                <input type="text" placeholder="Enter your university name" required />

                <label>Admin ID</label>
                <input type="text" placeholder="Enter your admin ID" required />

                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" required />

                <label>Email ID</label>
                <input type="email" placeholder="Enter your email" required />

                <label>Set Security Pin (6 digits)</label>
                <input type="password" maxLength="6" placeholder="Set your 6-digit pin" required />

                <button type="submit" className="submit-button">Submit & Verify</button>
            </form>
        </div>
    );
};

export default AdminSignUpForm;
