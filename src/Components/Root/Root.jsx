import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <Navbar/>
            <div className='bg-gray-300 max-h-fit '>
                <Outlet/>
            </div>
            
            <Footer/>
        </div>
    );
};

export default Root;