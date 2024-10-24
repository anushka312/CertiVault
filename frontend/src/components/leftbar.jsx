import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import DocumentCarousel from "./DocumentCarousel";

export default function LeftBar() {
    return (
        <>
        <div className="flex flex-row gap-4">
        <div className="flex flex-col bg-white h-screen w-2/6"> {/* h-screen ensures the full height */}
            <div>
                <ul className="text-black text-lg pt-4">
                    <li><button className="p-3 pl-7 pr-14 border-l-4 rounded-r-2xl border-indigo-300 hover:bg-blue-100 " ><FontAwesomeIcon icon={faHouse} /> Home</button></li>
                    <li><button className="p-3 pl-7 pr-5 border-l-4 rounded-r-2xl border-indigo-300 hover:bg-blue-100" >Issued Documents</button></li>
                    <li><button className="p-3 pl-7 pr-5 border-l-4 rounded-r-2xl border-indigo-300 hover:bg-blue-100">Fetch Documents</button></li>
                    <li><button className="p-3 pl-7 pr-10 border-l-4 rounded-r-2xl border-indigo-300 hover:bg-blue-100">About</button></li>
                    <li><button className="p-3 pl-7 pr-10 border-l-4 rounded-r-2xl border-indigo-300 hover:bg-blue-100">Report</button></li>
                </ul>
            </div>  
        </div>
        <div className="flex flex-col">
        <h1 className="text-2xl text-violet-700 p-10 pb-3">Welcome, Aditya Kumar Jha!</h1>
        <p className="text-lg text-black pl-10 pb-5 pr-14">Welcome to CertiVault, your trusted platform for securely issuing, storing, and managing official documents. CertiVault allows you to store, verify, and access important documents like certificates, transcripts, and diplomas all in one place. Issued directly by institutions, your credentials remain authentic and tamper-proof.</p>
        <p className="text-lg text-black pl-10 pb-5">Sign up today to safeguard your future, or sign in to access your documents instantly, anytime, anywhere.</p>
        <p className="text-2xl text-violet-700 pl-10">Documents</p>
        <DocumentCarousel />
        </div>
        </div>
        </>
    );
}
