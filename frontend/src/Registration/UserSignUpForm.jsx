import React from 'react';
import './SignUpPage.css';

const UserSignUpForm = ({ googleData, isGoogle }) => {
    return (
        <div className="form-container">
            <h2>Enter your details</h2>
            <form className="signup-form">
                <label>Full Name</label>
                <input type="text" defaultValue={isGoogle ? googleData.displayName : ''} placeholder="Enter your full name" required />

                <label>Date of Birth</label>
                <input type="date" required />

                <label>Gender</label>
                <select>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                <label>University Name</label>
                <input type="text" placeholder="Enter your university name" required />

                <label>University Roll No</label>
                <input type="text" placeholder="Enter your university roll number" required />

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

export default UserSignUpForm;
