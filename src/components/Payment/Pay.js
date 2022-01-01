import React from 'react';
import { useParams } from 'react-router-dom';
import Payment from './Payment';

const Pay = () => {
   const price = useParams()
   return (
      <div className='py-5 about-background'>
         <h2 className='text-center pb-2'>Pay for your Order</h2>
         <Payment money={price}></Payment>
      </div>
   );
};

export default Pay;