import { LinearProgress, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../firebase/useAuth';

const LogIn = () => {
   const { register, handleSubmit, reset } = useForm();
   const { logInWithEmailPass, setLoading, loading, account } = useAuth();

   const onSubmit = dta => {
      logInWithEmailPass(dta?.email, dta?.password)
         .then((userCredential) => {
            // history.push(ridirect_url);
         })
         .catch((error) => {

         })
         .finally(() => setLoading(false));
      reset();
   }
   return (
      <div className='App about-background py-4'>
         {
            account?.email ? <><h2 className='pt-4'>Already Logged In</h2>
               <img alt="" width={'250px'} src={`data:image/png;base64,${account.profilePic}`} />
            </> :
               <>
                  <h2 className='pt-4'>Please Log In</h2>
                  {
                     loading ? <><LinearProgress /></> :
                        <>
                           <form onSubmit={handleSubmit(onSubmit)}>
                              <TextField {...register("email")} className='w-50 py-3' id="standard-basic" label="Email" variant="standard" type={'email'} /> <br />
                              <TextField {...register("password")} className='w-50 py-3' id="standard-basic" label="Password" variant="standard" type={'password'} /> <br />
                              <input type='submit' value='Log In Now' className='btn-login' />
                           </form>
                        </>
                  }

                  <p>Dont have any account? <strong><Link to={'/register'}>Register Now</Link></strong></p>
               </>
         }
      </div >
   );
};

export default LogIn;