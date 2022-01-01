import initFirebase from "./firebase.init"
import {
   getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
   onAuthStateChanged, signOut
} from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
   initFirebase();

   const [loading, setLoading] = useState(true);
   const [user, setUser] = useState({});
   const [account, setAccount] = useState({});
   const auth = getAuth();

   // User Registration Using Email and password
   const registerWithEmailPass = (email, password) => {
      setLoading(true)
      createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            // Signed in 
            // navigate('/home')
            const user = userCredential.user;
            setUser(user)
         })
         .catch((error) => {
         })
         .finally(() => setLoading(false));
   }

   // User login using email and password
   const logInWithEmailPass = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }

   // Auth state change
   useEffect(() => {
      setLoading(true)
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user);
            fetch(`http://localhost:4000/user/${user.email}`)
               .then(res => res.json())
               .then(data => setAccount(data))
         }
         else {
            setUser({})
         }
         setLoading(false);
      });
      return unsubscribe;
   }, [auth])

   // Log out From current user
   const logOut = () => {
      setLoading(true)
      signOut(auth)
         .then(() => {
            setUser({})
            setAccount({})
         })
         .catch(error => console.log(error.message))
         .finally(() => setLoading(false))
   };

   return {
      registerWithEmailPass,
      logInWithEmailPass,
      loading,
      setLoading,
      user,
      setUser,
      logOut,
      account
   }
}

export default useFirebase;