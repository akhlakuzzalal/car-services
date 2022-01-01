import React, { useEffect, useState } from 'react';
import useAuth from '../../firebase/useAuth';

const AllUsers = () => {
   const [users, setUsers] = useState([])
   useEffect(() => {
      fetch('https://driving-services.herokuapp.com/users')
         .then(res => res.json())
         .then(data => setUsers(data))
   }, [])

   console.log(users)
   return (
      <div className='App my-5 pb-5'>
         <h2 className='text-dark pb-3'>All Users {users.length}</h2>
         <div className='row row-cols-2 mx-5 px-5'>
            {
               users.map(user => <>
                  <div className='col-6'>
                     <div style={{ width: '600px' }} className='py-3 about-background d-flex border border-4 rounded align-items-center justify-content-center'>
                        <div>
                           <img src={`data:image/png;base64,${user?.profilePic}`} alt="" />
                        </div>
                        <div className='text-start ms-4 '>
                           <h2>Name: {user.information.name}</h2>
                           <h3>As a <span className='fw-bold'>{user.information.role}</span></h3>
                           <h4>Phone: {user.information.phone}</h4>
                           <h4>Area: {user.information.area}</h4>
                           <h4>Ager: {user.information.age}</h4>
                        </div>
                     </div>
                  </div>
               </>)
            }
         </div>
      </div>
   );
};

export default AllUsers;