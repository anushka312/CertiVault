import React, { useState } from "react";


const Login_A = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [collegeID, setCollegeID] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('College ID:', collegeID);
    }


    return (
        <div >
            <h4 className="text-left translate-x-[15%] text-xl pt-[10px] text-[#7b69a0] pb-[20px]">
                Sign in to your account!
            </h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="text-[large] ml-[100px]">Email:</label>
                    <br />
                    <input
                        className="w-[70%] h-6.5 border rounded block text-black bg-white bg-clip-padding text-base leading-normal shadow-[0px_0px_5px_0px_rgba(0,0,0,0.2)] ml-[100px] m-2.5 px-3 py-1.5 border-[#ced4da] focus:shadow-[0px_0px_10px_0px_rgba(63,81,181,0.5)] focus:border-[#3F51B5]"
                        type="email"
                        id="email"
                        placeholder="Email Address*"
                        value={email}
                        autoComplete="off"
                        autoCapitalize="off"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="text-[large] ml-[100px]">Password:</label>
                    <br />
                    <input
                        className="w-[70%] h-6.5 border rounded block text-black bg-white bg-clip-padding text-base leading-normal shadow-[0px_0px_5px_0px_rgba(0,0,0,0.2)] ml-[100px] m-2.5 px-3 py-1.5 border-[#ced4da] focus:shadow-[0px_0px_10px_0px_rgba(63,81,181,0.5)] focus:border-[#3F51B5]"
                        type="password"
                        id="password"
                        placeholder="Password*"
                        value={password}
                        autoComplete="off"
                        autoCapitalize="off"
                        minLength={5}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="collegeID" className="text-[large] ml-[100px]">College ID:</label>
                    <br />
                    <input
                        className="w-[70%] h-6.5 border rounded block text-black bg-white bg-clip-padding text-base leading-normal shadow-[0px_0px_5px_0px_rgba(0,0,0,0.2)] ml-[100px] m-2.5 px-3 py-1.5 border-[#ced4da] focus:shadow-[0px_0px_10px_0px_rgba(63,81,181,0.5)] focus:border-[#3F51B5]"
                        type="text"
                        id="collegeID"
                        placeholder="College ID"
                        value={collegeID}
                        onChange={(e) => setCollegeID(e.target.value)}
                    />
                </div>
                <div className="text-center">
                    <button
                        className="bg-[#28a745] mt-[20px] text-white cursor-pointer px-5 py-2.5 rounded-[5px] hover:bg-[#45a049]"
                        type="submit"
                    >
                        Login
                    </button>
                </div>
            </form>
           
        </div>
    );
}

export default Login_A;
