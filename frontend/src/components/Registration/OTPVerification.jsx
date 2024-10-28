import React, { useState, useEffect } from 'react';

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
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-6 bg-white rounded-lg shadow-lg z-50 text-center">
            <h2 className="text-2xl mb-5 text-gray-800">Enter the OTP sent to {email}</h2>
            <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full p-2 mb-4 border border-gray-300 rounded-md text-lg"
            />
            <button
                onClick={handleOTPSubmit}
                className="bg-blue-500 text-white py-2 px-4 rounded-md text-lg transition duration-300 hover:bg-blue-600"
            >
                Verify OTP
            </button>

            {/* Resend OTP section */}
            <div className="mt-5">
                {resendAvailable ? (
                    <button
                        onClick={handleResendOTP}
                        className="bg-blue-500 text-white py-2 px-4 rounded-md text-lg transition duration-300 hover:bg-blue-600"
                    >
                        Resend OTP
                    </button>
                ) : (
                    <p className="text-gray-700">Resend OTP available in {timer} seconds.</p>
                )}
            </div>

            {/* Display error messages */}
            {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </div>
    );
};

export default OTPVerification;
