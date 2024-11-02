import React, { useState } from 'react';

const EmailPopup = ({ onSubmit }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(email); // Call the parent function to handle OTP send
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-80 p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-lg font-semibold mb-4">Enter your Email</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full py-2 bg-green-500 text-white rounded-md text-sm font-semibold hover:bg-green-600 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EmailPopup;
