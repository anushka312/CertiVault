import React from 'react';

const UserSignUpForm = ({ googleData, isGoogle }) => {
    return (
        <div className="form-container max-w-md mx-auto bg-white p-6 rounded-lg shadow-md border-b-4 border-purple-700">
            <h2 className="text-xl font-semibold text-center mb-4">Enter your details</h2>
            <form className="signup-form space-y-3">
                <label className="block text-sm">Full Name</label>
                <input
                    type="text"
                    defaultValue={isGoogle ? googleData.displayName : ''}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-3 py-2 border rounded-md text-sm"
                />

                <label className="block text-sm">Date of Birth</label>
                <input
                    type="date"
                    required
                    className="w-full px-3 py-2 border rounded-md text-sm"
                />

                <label className="block text-sm">Gender</label>
                <select className="w-full px-3 py-2 border rounded-md text-sm">
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                <label className="block text-sm">University Name</label>
                <input
                    type="text"
                    placeholder="Enter your university name"
                    required
                    className="w-full px-3 py-2 border rounded-md text-sm"
                />

                <label className="block text-sm">University Roll No</label>
                <input
                    type="text"
                    placeholder="Enter your university roll number"
                    required
                    className="w-full px-3 py-2 border rounded-md text-sm"
                />

                <label className="block text-sm">Phone Number</label>
                <input
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                    className="w-full px-3 py-2 border rounded-md text-sm"
                />

                <label className="block text-sm">Email ID</label>
                <input
                    type="email"
                    defaultValue={isGoogle ? googleData.email : ''}
                    placeholder="Enter your email"
                    required
                    className="w-full px-3 py-2 border rounded-md text-sm"
                />

                {!isGoogle && (
                    <>
                        <label className="block text-sm">Set Security Pin (6 digits)</label>
                        <input
                            type="password"
                            maxLength="6"
                            placeholder="Set your 6-digit pin"
                            required
                            className="w-full px-3 py-2 border rounded-md text-sm"
                        />
                    </>
                )}

                <button
                    type="submit"
                    className="w-full py-2 mt-4 bg-green-500 text-white rounded-md text-sm font-semibold hover:bg-green-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UserSignUpForm;
