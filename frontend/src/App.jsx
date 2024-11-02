import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar.jsx';
import LeftBar from './components/leftbar.jsx';
import Home from './components/Home.jsx'
import Documents from './components/Documents.jsx';
import Document from './components/Document.jsx';

const App = () => {
    return (
        <div className='bg-slate-400'>
            <NavBar />
            <hr className='h-2 bg-slate-900' />
            <div className='flex gap-2'>
                <div className='bg-slate-900 w-[20%]' >
                    <LeftBar />
                </div>
                <div className='bg-slate-950 w-[80%]'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/documents' element={<Documents />} />
                        <Route path='/doc/:docId' element={<Document />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default App;
