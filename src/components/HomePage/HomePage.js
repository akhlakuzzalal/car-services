import React from 'react';
import './Homepage.css';
import AboutUs from './AboutUs';
import HowWorks from './HowWorks';
import { Link } from 'react-router-dom';

const HomePage = () => {
   return (
      <div>
         <div className='row row-cols-2 align-items-center'>
            <div className='col-5 banner-text m-0 py-5 text-end pe-5'>
               <h1>Earn. Connect</h1>
               <h1>Contribute to</h1>
               <h1>Socity</h1>
               <p>partner with us for drive your own livelihood and more</p>
               <Link to='/login' className='sign-up-btn text-light text-decoration-none'>Sign In</Link>
            </div>
            <img className='col-7' src="https://purepng.com/public/uploads/large/purepng.com-ford-focus-yellow-carcarvehicletransportford-961524665802mhbcd.png" alt="" />
         </div>
         <HowWorks></HowWorks>
         <AboutUs></AboutUs>
      </div>
   );
};

export default HomePage;