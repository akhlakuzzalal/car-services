import { TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../firebase/useAuth';

const Ragistration = () => {
   const navigate = useNavigate();
   const { registerWithEmailPass } = useAuth();
   const [registerAs, setRegisterAs] = useState('Rider');
   const [profilePic, setProfilePic] = useState(null);
   const [licence, setLicence] = useState(null);
   const [nidPic, setNID] = useState(null);
   const { register, handleSubmit, reset } = useForm();

   const handleChange = (event, newAlignment) => {
      setRegisterAs(newAlignment);
   };

   const formData = new FormData();
   const onSubmit = dta => {
      const { name, email, age, phone, address, area, vechile, password, password_2 } = dta
      formData.append('name', name);
      formData.append('email', email);
      formData.append('age', age);
      formData.append('phone', phone);
      formData.append('address', address);
      formData.append('area', area);
      formData.append('vechile', vechile);
      formData.append('password', password);
      formData.append('role', registerAs);
      formData.append('profile', profilePic);
      formData.append('licence', licence);
      formData.append('nid', nidPic);
      if (password === password_2) {
         registerWithEmailPass(email, password);
         fetch('https://driving-services.herokuapp.com/user', {
            method: 'POST',
            body: formData
         })
            .then(res => res.json())
            .then(data => {
               if (data.insertedId) {
                  alert('SuccessFully Registered Account')
                  navigate('/home')
               }
            })
      }
      else {
         alert('Password mismatch')
      }
      reset();

   };

   return (
      <div className='App py-5 about-background'>
         <h2 className=''>Register as a {registerAs}</h2>
         <ToggleButtonGroup
            color="secondary"
            value={registerAs}
            exclusive
            onChange={handleChange}
         >
            <ToggleButton value="Rider">As a Rider</ToggleButton>
            <ToggleButton value="Learner">As a Learner</ToggleButton>
         </ToggleButtonGroup> <br />
         <form onSubmit={handleSubmit(onSubmit)}>
            <TextField required {...register("name")} className='w-50 py-1' id="standard-basic" label="Full Name" variant="standard" type={'text'} /> <br />
            <TextField required {...register("email")} className='w-50 py-1' id="standard-basic" label="Email" variant="standard" type={'email'} /> <br />
            <TextField {...register("age")} className='w-50 py-1' id="standard-basic" label="Age" variant="standard" type={'number'} /> <br />
            <TextField {...register("address")} className='w-50 py-1' id="standard-basic" label="Address" variant="standard" type={'text'} /> <br />
            <TextField {...register("phone")} className='w-50 py-1' id="standard-basic" label="Phone Number" variant="standard" type={'number'} /> <br />
            <TextField {...register("area")} className='w-50 py-1' id="standard-basic" label="Area" variant="standard" type={'text'} /> <br />
            <TextField {...register("vechile")} className='w-50 py-1' id="standard-basic" label="Vehicle Information" variant="standard" type={'text'} /> <br />
            <TextField required {...register("password")} className='w-50 py-1' id="standard-basic" label="Password" variant="standard" type={'password'} /> <br />
            <TextField {...register("password_2")} className='w-50 py-1' id="standard-basic" label="Confirm Password" variant="standard" type={'password'} /> <br />
            <div className='btn-wrapper ms-4 mt-3'>
               <button className='upload-btn'>Upload Profile</button>
               <input required onChange={e => setProfilePic(e.target.files[0])} accept='image/*' type="file" placeholder='Image' />
            </div>
            {
               registerAs === 'Rider' && <div className='btn-wrapper ms-4 mt-3'>
                  <button className='upload-btn'>Upload Licence</button>
                  <input required onChange={e => setLicence(e.target.files[0])} accept='image/*' type="file" placeholder='Image' />
               </div>
            }
            <div className='btn-wrapper ms-4 mt-3'>
               <button className='upload-btn'>Upload NID</button>
               <input required onChange={e => setNID(e.target.files[0])} accept='image/*' type="file" placeholder='Image' />
            </div><br />
            <input type={'submit'} value='Register Now' className='btn-login mb-2' />
         </form>
         <p>Already have a account? <strong><Link to={'/login'}>LogIn Now</Link></strong></p>
      </div>
   );
};

export default Ragistration;