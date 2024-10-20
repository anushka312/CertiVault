import React, { useState, useEffect } from 'react';
import './OTPVerification.css';

const OTPVerification = ({ email, onSuccess }) => {
    const [otp, setOtp] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [resendAvailable, setResendAvailable] = useState(false);
    const [timer, setTimer] = useState(60); // 60 seconds for resend timer

    // Handle OTP submission
    const handleOTPSubmit = async () => {
        try {
            const response = await fetch('http://localhost:5000/verify-otp', { // Use your backend URL
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp }),
            });
            const result = await response.json();
            if (result.success) {
                onSuccess(); // Success callback
            } else {
                setErrorMessage(result.message); // Show error message
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            setErrorMessage('Error verifying OTP. Please try again.');
        }
    };

    // Handle OTP resend
    const handleResendOTP = async () => {
        try {
            const response = await fetch('http://localhost:5000/send-otp', { // Resend OTP endpoint
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const result = await response.json();
            if (result.success) {
                setErrorMessage('A new OTP has been sent to your email.');
                setResendAvailable(false); // Disable resend button
                setTimer(60); // Reset the timer
            } else {
                setErrorMessage('Error resending OTP. Please try again later.');
            }
        } catch (error) {
            console.error('Error resending OTP:', error);
            setErrorMessage('Error resending OTP. Please try again.');
        }
    };

    // Timer logic for the "Resend OTP" button
    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else {
            setResendAvailable(true); // Enable resend button when timer is over
        }
    }, [timer]);

    return (
        <div className="otp-verification">
            <h2>Enter the OTP sent to {email}</h2>
            <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
            />
            <button onClick={handleOTPSubmit}>Verify OTP</button>

            {/* Resend OTP section */}
            <div style={{ marginTop: '20px' }}>
                {resendAvailable ? (
                    <button onClick={handleResendOTP}>Resend OTP</button>
                ) : (
                    <p>Resend OTP available in {timer} seconds.</p>
                )}
            </div>

            {/* Display error messages */}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default OTPVerification;
