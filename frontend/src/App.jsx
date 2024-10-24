import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import LeftBar from './components/leftbar';
import Sign from './components/sign'; // Import your Sign component

const App = () => {
    const location = useLocation();

    return (
        <div className="bg-sky-100 min-h-screen">
            {/* Conditionally render the Navbar and LeftBar */}
            {location.pathname !== '/signup' && (
                <>
                    <Navbar />
                    <LeftBar />
                </>
            )}
            <Routes>
                <Route path="/signup/*" element={<Sign />} /> {/* Use Sign component for all signup routes */}
            </Routes>
        </div>
    );
};

// Wrap App with Router
const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
