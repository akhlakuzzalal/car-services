import React from 'react';
import { RiAccountPinCircleFill } from 'react-icons/ri'
import { AiFillCar, AiTwotoneCar, AiOutlineSafety } from 'react-icons/ai'

const HowWorks = () => {
   return (
      <div className='py-5'>
         <h2 className='text-center pb-5'>Features</h2>
         <div className='row row-cols-4'>
            <div className='text-center'>
               <RiAccountPinCircleFill className='fs-1' />
               <h4>Create account Simply</h4>
            </div>
            <div className='text-center'>
               <AiFillCar className='fs-1' />
               <h4>Join as a Rider</h4>
            </div>
            <div className='text-center'>
               <AiTwotoneCar className='fs-1' />
               <h4>Join as a Learner</h4>
            </div>
            <div className='text-center'>
               <AiOutlineSafety className='fs-1' />
               <h4>Safely Ride</h4>
            </div>
         </div>
      </div>
   );
};

export default HowWorks;