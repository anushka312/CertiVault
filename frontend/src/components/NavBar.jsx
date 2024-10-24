import React from "react";


const NavBar = () => {
    return (
        <div>
        <nav className="bg-white border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <div className= "rounded-full h-12 w-12 bg-blue-700 font-bold text-xl flex justify-center items-center">C</div>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Flowbite
                    </span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                    >
                    Get started
                    </button>
                </div>
                <div
                    className="items-center justify-between w-full flex md:w-auto md:order-1"
                    id="navbar-cta"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <a
                            href="#"
                            className="block py-2 px-3 md:p-0 text-blue-700 rounded"
                            aria-current="page"
                            >
                            Home
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-2 px-3 md:p-0 text-blue-700 rounded"
                            aria-current="page"
                            >
                            Services
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-2 px-3 md:p-0 text-blue-700 rounded"
                            aria-current="page"
                            >
                            Contact Us
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-2 px-3 md:p-0 text-blue-700 rounded"
                            aria-current="page"
                            >
                            About Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default NavBar;
