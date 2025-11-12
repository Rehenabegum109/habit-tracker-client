import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useLocation,} from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
          const location = useLocation();

  
  const hideLayout =
    location.pathname !== "/" &&
    location.pathname !== "/add-habit" &&
    location.pathname !== "/my-habits" &&
    location.pathname !== "/public-habit" &&
    location.pathname !== "/login" &&
    location.pathname !== "/register" &&
    !location.pathname.startsWith("/habit/");
    return (
        <div className='max-w-7xl mx-auto '>
              {!hideLayout && <Navbar />}
            <div className='bg-gray-300 max-h-fit '>
                <Outlet/>
            </div>
            
             {!hideLayout && <Footer />}
        </div>
    );
};

export default Root;