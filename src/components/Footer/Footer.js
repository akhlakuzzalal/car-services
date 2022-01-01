import React from 'react';

const Footer = () => {
   return (
      <div className='row row-cols-4 footer pb-5 pt-3 px-5 text-light'>
         <div className='footer-logo col-3'>
            <h3 className='text-light'><span style={{ color: '#ffd001' }}>Hero</span> Rider</h3>
            <p className='text-light'>Car Services</p>
            <p className='text-light fst-normal'>We are always trying our best for our client. Belive us and get the best service</p>
         </div>
         <div id='links' className='col-3'>
            <h4>Usefull Links</h4>
            <p>Home</p>
            <p>Log in</p>
            <p>About us</p>
            <p>Register</p>
         </div>
         <div className='col-3'>
            <h4>Head Office</h4>
            <p className='text-light'>2 bo road, Ansar camp, Uttor Tolarbag, Mirpur-1, Dhaka</p>
            <p className="text-light">Email: support@hero-rider.com</p>
         </div>
      </div>

   );
};

export default Footer;