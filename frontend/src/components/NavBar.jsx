import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
            <header className="bg-white shadow-md">
                <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <a href="#home" className="text-black text-xl h-8 w-8">
                        LOGO
                    </a>
                    <div className="hidden md:flex items-center gap-4">
                        <button className='rounded-2xl text-indigo-700 p-3 pl-6 pr-6 text-sm hover:bg-slate-100'>SIGN IN</button>
                        <Link to="/signup">
                            <button className='bg-indigo-700 rounded-2xl text-white p-3 pl-6 pr-6 text-sm hover:bg-indigo-500'>SIGN UP</button>
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    );
}
