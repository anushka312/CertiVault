import React, { useState } from "react";
import Login_A from "./Login_A.jsx";
import facebookIcon from '../../assets/facebook.png';
import xIcon from '../../assets/x.png';
import instaIcon from '../../assets/insta.png';
import googleIcon from '../../assets/google.png';
import iosIcon from '../../assets/ios_1.png';
import playstoreIcon from '../../assets/playstore_2.png';
import auth from "../../../firebaseConfig.js"; // Imported from firebaseConfig.js
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login_U = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginType, setLoginType] = useState('user');
    const [error, setError] = useState('');

    // Handle regular login submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Both fields are required.");
            return;
        }
        setError('');
        console.log('Login Type:', loginType);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    // Handle Google login
    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('Google Login Successful:', user);
            alert(`Welcome ${user.displayName}!`);
        } catch (error) {
            console.error('Google Login Failed:', error);
            setError('Google Login Failed. Please try again.');
        }
    };

    return (
        <div >
            <div className="pt-90px bg-[#e0f2fe]">
                <div className="main">
                    <div className="bg-[white] shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] fixed w-full z-[99] px-0 py-3 left-0 ">
                        <div className="ml-40">
                            <b>LOGO</b>
                        </div>
                    </div>

                    <div className="flex justify-center items-center h-screen min-w-screen flex-col overflow-hidden bg-[#e0f2fe] py-3" style={{ paddingTop: "100px" }}>

                        <div className="bg-[white] shadow-[0_4px_8px_rgba(0,0,0,0.1)] inline-block w-[600px] h-[475 px]  m-2.5 p-5 rounded-lg border-b-4 border-b-[#6610f2] border-solid ">
                            <div className="flex mt-[10px]">
                                <button
                                     className={`text-[1rem] cursor-pointer h-[43px] m-[5px] p-2.5 rounded-md ${loginType === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                                     onClick={() => setLoginType('user')}
                                >
                                    User Login
                                </button>
                                <button
                                    className={`text-[1rem] cursor-pointer h-[43px] m-[5px] p-2.5 rounded-md ${loginType === 'admin' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                                    onClick={() => setLoginType('admin')}
                                >
                                    Admin Login
                                </button>
                            </div>
                            {loginType === 'user' ? (
                                <>
                                    <h4 className="text-left translate-x-[15%] text-xl pt-[10px] text-[#7b69a0] pb-[20px]">Sign in to your account!</h4>
                                    <form onSubmit={handleSubmit}>
                                        <div className="email">
                                            <label htmlFor="email" className="text-[large] ml-[100px]">Email:</label>
                                            <br />
                                            <input
                                                className="w-[70%] h-7.5 border rounded block text-black bg-white bg-clip-padding text-base leading-normal shadow-[0px_0px_5px_0px_rgba(0,0,0,0.2)] ml-[100px] m-2.5 px-3 py-1.5 border-[#ced4da] focus:shadow-[0px_0px_10px_0px_rgba(63,81,181,0.5)] focus:border-[#3F51B5] mb-[20px]"
                                                type="email"
                                                id="email"
                                                placeholder="Email Address*"
                                                value={email}
                                                autoComplete="off"
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="password">
                                            <label htmlFor="password" className="text-[large] ml-[100px]">Password:</label>
                                            <br />
                                            <input
                                                className="w-[70%] h-7.5 border rounded block text-black bg-white bg-clip-padding text-base leading-normal shadow-[0px_0px_5px_0px_rgba(0,0,0,0.2)] ml-[100px] m-2.5 px-3 py-1.5 border-solid border-[#ced4da] focus:shadow-[0px_0px_10px_0px_rgba(63,81,181,0.5)] focus:border-[#3F51B5]"
                                                style={{
                                                    transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, width 0.15s ease-in-out"
                                                }}
                                                type="password"
                                                id="password"
                                                placeholder="Password*"
                                                autoComplete="off"
                                                minLength={5}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        {error && <p className="error">{error}</p>}
                                        <div className="text-center">
                                            <button
                                                className="bg-[#28a745] mt-[20px] text-white cursor-pointer px-5 py-2.5 rounded-[5px] disabled:cursor-not-allowed valid:bg-[#45a049] hover:bg-[#45a050]"
                                                type="submit"
                                                disabled={!email || !password} 
                                            >
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <Login_A />
                            )}
                            <p className="ml-4 text-center mt-2.5">
                                <button
                                    className="bg-[#4285F4] text-white cursor-pointer text-sm flex items-center justify-center gap-2 px-4 py-2 rounded-[5px] hover:bg-[#357ae8]"
                                    onClick={handleGoogleLogin}
                                >
                                    <img src={googleIcon} alt="Google Icon" className="h-[18px] w-[18px]" />
                                    Login with Google
                                </button>
                            </p>
                        </div>
                        <p className="text-center mt-5">
                            Do not have an account? <a href="#reg" class="text-[#007bff]">Sign up</a>
                        </p>
                    </div>
                    <div className="text-[small] leading-normal bg-[#08192b] text-white h-[250px] w-full px-2.5 mt-[25px] py-0">
                        <div className="logo">logo</div>
                        <div className="w-2/5 text-justify flex ml-4">
                            <p className="text-[#c0c0c0] text-sm">
                                CertiVault is a secure platform for storing, verifying, and sharing digital certificates, ensuring the authenticity and integrity of credentials. It simplifies certificate management with a focus on security and ease of access.
                            </p>
                        </div>
                        <br></br>
                        <span className="text-base text-[#c0c0c0] ml-4">FOLLOW US</span>
                        <div className="flex">
                            <img className="ml-4 mt-[5px]" src={facebookIcon} alt="Facebook Icon" />
                            <img className="ml-4 mt-[5px]" src={xIcon} alt="X Icon" />
                            <img className="ml-4 mt-[5px]" src={instaIcon} alt="Insta Icon" />
                        </div>
                        <div className="flex justify-end gap-2.5  pb-[10px]">
                            <p>Download our app on:</p>
                            <img src={iosIcon} alt="IOS Icon" />
                            <img src={playstoreIcon} alt="Play Store Icon" />
                        </div>
                        <hr />
                        <div className="w-2/5 text-justify flex ml-4">Copyright ©️ 2024</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login_U;
