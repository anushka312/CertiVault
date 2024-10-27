import React, { useState, useRef } from "react";
import facebookIcon from '../../assets/facebook.png';
import xIcon from '../../assets/x.png';
import instaIcon from '../../assets/insta.png';
import iosIcon from '../../assets/ios_1.png';
import playstoreIcon from '../../assets/playstore_2.png';


const Report = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        issueDescription: "",
        screenshots: null
    });

    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prevFormData => ({
            ...prevFormData,
            screenshots: file
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Report Submitted: ', formData);
        alert('Your report has been submitted successfully!');

        setFormData({
            name: '',
            email: '',
            issueDescription: '',
            screenshots: null,
        });

        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="pt-90px bg-[#e0f2fe]">
            <div className="main">
                <div className="bg-white shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] fixed w-full z-[99] px-0 py-3 left-0 flex justify-between items-center">
                    <div className="ml-40">
                        <b>LOGO</b>
                    </div>
                    <div className="flex space-x-4 mr-40"> 
                        <button className="bg-[#4a3dc3] text-white px-4 py-2 focus:outline-none rounded-2xl">SIGN UP</button>
                            <button className="bg-[#4a3dc3] text-white px-4 py-2 focus:outline-none rounded-2xl">SIGN IN</button>
                    </div>
                </div>

                <div className="flex justify-center items-center h-screen" style={{ paddingTop: "80px" }}>
                    {/* Report Form */}
                    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
                        <h2 className="text-2xl text-center mb-4 text-[#7b69a0]">Report an Issue</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-bold">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Name*"
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-bold">Email ID:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email Address*"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="issueDescription" className="block text-gray-700 font-bold">Describe Your Issue:</label>
                                <textarea
                                    id="issueDescription"
                                    name="issueDescription"
                                    value={formData.issueDescription}
                                    onChange={handleChange}
                                    required
                                    placeholder="Explain about your issue here*"
                                    rows="5"
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                                ></textarea>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="screenshots" className="block text-gray-700 font-bold">Upload Screenshot(s) or File(s):</label>
                                <input
                                    type="file"
                                    id="screenshots"
                                    name="screenshots"
                                    onChange={handleFileChange}
                                    accept="image/*,application/pdf"
                                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                                />
                            </div>

                            <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                                Submit Report
                            </button>
                        </form>
                    </div>
                </div>

                <div className="text-[small] leading-normal bg-[#08192b] text-white h-[250px] w-full px-2.5 mt-[25px] py-0">
                    <div className="logo">logo</div>
                    <div className="w-2/5 text-justify flex ml-4">
                        <p className="text-[#c0c0c0] text-sm">
                            CertiVault is a secure platform for storing, verifying, and sharing digital certificates, ensuring the authenticity and integrity of credentials. It simplifies certificate management with a focus on security and ease of access.
                        </p>
                    </div>
                    <br />
                    <span className="text-base text-[#c0c0c0] ml-4">FOLLOW US</span>
                    <div className="flex">
                        <img className="ml-4 mt-[5px]" src={facebookIcon} alt="Facebook Icon" />
                        <img className="ml-4 mt-[5px]" src={xIcon} alt="X Icon" />
                        <img className="ml-4 mt-[5px]" src={instaIcon} alt="Insta Icon" />
                    </div>
                    <div className="flex justify-end gap-2.5 pb-[10px]">
                        <p>Download our app on:</p>
                        <img src={iosIcon} alt="IOS Icon" />
                        <img src={playstoreIcon} alt="Play Store Icon" />
                    </div>
                    <hr />
                    <div className="w-2/5 text-justify flex ml-4">Copyright ©️ 2024</div>
                </div>
            </div>
        </div>
    );
};

export default Report;
