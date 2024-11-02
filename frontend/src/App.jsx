import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import NavBar from './components/NavBar.jsx';


const App = () => {
    return (
        <div className='bg-slate-900'>
            <div className='bg-slate-300 mx-[10%]' >
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />}/>
            </Routes>
            </div>
            <div>
                Add New Component
            </div>
        </div>
    );
};

export default App;
