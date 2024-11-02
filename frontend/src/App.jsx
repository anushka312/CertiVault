import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation,Link} from 'react-router-dom';
import Navbar from './components/navbar';
import LeftBar from './components/leftbar';
import Sign from './components/sign'; // Import your Sign component
import CategoryPage from './components/CategoryPage';

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
                <Route path="/category" element={<CategoryPage />} />
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
