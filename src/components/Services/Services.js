import React from 'react';
import useAuth from '../../firebase/useAuth.js'
import { AiFillCar } from 'react-icons/ai'
import { FaMotorcycle } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Services = () => {
   const { account } = useAuth();
   return (
      <div className='my-5'>
         {
            account?.email ?
               <>{
                  account?.information?.role === 'Learner' ?
                     <>
                        <div className='App'>
                           <h2>There are two services is avalable now</h2>
                           <div className='d-flex justify-content-center'>
                              <div className='w-25'>
                                 <h1 className='back-yellow pb-5'>Car Driving</h1>
                                 <AiFillCar style={{ width: '80px', height: '80px', position: 'relative', top: '-50px' }} className='border rounded-circle bg-light' />
                                 <h3>Learner Car Driving</h3>
                                 <h1>$: 200</h1>
                                 <p>Any Location in side the Divition area.</p>
                                 <p>Our Teachers Will be call you after getting Order</p>
                                 <Link to={`/pay/${200}`} className='sign-up-btn'>Get Now</Link>
                                 <p className='py-3 mt-4 back-yellow'>All the beest wish for you</p>
                              </div>
                              <div className='ms-4 w-25'>
                                 <h1 className='back-yellow pb-5'>Bike Driving</h1>
                                 <FaMotorcycle style={{ width: '80px', height: '80px', position: 'relative', top: '-50px' }} className='border rounded-circle bg-light' />
                                 <h3>Learner Bike Driving</h3>
                                 <h1>$: 100</h1>
                                 <p>Any Location in side the Divition area.</p>
                                 <p>Our Teachers Will be call you after getting Order</p>
                                 <Link to={`/pay/${100}`} className='sign-up-btn'>Get Now</Link>
                                 <p className='py-3 mt-4 back-yellow'>All the beest wish for you</p>
                              </div>
                              <div>

                              </div>
                           </div>
                        </div>
                     </>
                     :
                     <><h2>Comming Soon</h2></>
               }</>
               :
               <>
                  <div className='App'>
                     <h2 className='text-center'>You have to log in first </h2>
                     <Link className='text-light text-decoration-none sign-up-btn' to='/login'>Log In</Link>
                  </div>
               </>
         }
      </div>
   );
};

export default Services;