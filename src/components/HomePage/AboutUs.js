import React from 'react';
import imageCar from '../../images/15-159049_ford-focus-se-2018-hd-png-download-removebg-preview.png'

const AboutUs = () => {
   return (
      <div className='row row-cols-2 about-background py-4 align-items-center'>
         <div className='col-7 px-5 flex-column'>
            <h2 className='text-start fw-bold'>About Us</h2>
            <h5>Hero Rider is a Ride Sharing Platfrom.  A driver who has his/her own or rented car can give
               rides to other people. We also provide driving lessons services. If you want to build tour future
               then you can join with us by a very easy way in our website. We teach driving vary carefully  and
               there are so many successfull drivers who are teach by us the are now stablished</h5>
         </div>
         <img className='col-5' src={imageCar} alt="" />
      </div>
   );
};

export default AboutUs;