import React, { useState } from 'react';
import './EmailPopup.css';

const EmailPopup = ({ onSubmit }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(email); // Call the parent function to handle OTP send
    };

    return (
        <div className="email-popup">
            <h2>Enter your Email</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EmailPopup;
