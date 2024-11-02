import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import DocumentCarousel from "./DocumentCarousel";
import {Link} from "react-router-dom";

export default function LeftBar() {
    
    return (
        <>
        <div className="flex flex-row gap-4 w-2/6">
        <div className="flex flex-col bg-white h-screen "> {/* h-screen ensures the full height */}
            <div>
                <ul className="text-black text-lg pt-4">
                    <li><button className="p-3 pl-7 pr-14 border-l-4 rounded-r-2xl border-indigo-300 hover:bg-blue-100 " ><FontAwesomeIcon icon={faHouse} /> Home</button></li>
                    <li>
                        <Link to="/category">
                            <button className="p-3 pl-7 pr-5 border-l-4 rounded-r-2xl border-indigo-300 hover:bg-blue-100">
                                Issued Documents
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/fetch">
                            <button className="p-3 pl-7 pr-5 border-l-4 rounded-r-2xl border-indigo-300 hover:bg-blue-100">
                                Fetch Documents
                            </button>
                        </Link>
                    </li>
                    <li><button className="p-3 pl-7 pr-10 border-l-4 rounded-r-2xl border-indigo-300 hover:bg-blue-100">About</button></li>
                    <li><button className="p-3 pl-7 pr-10 border-l-4 rounded-r-2xl border-indigo-300 hover:bg-blue-100">Report</button></li>
                </ul>
            </div>  
        </div>
        
        </div>
        </>
    );
}
