import { Navigate } from "react-router-dom";
import useAuth from "../useAuth";

const PrivateRoute = ({ children }) => {
   const { account, loading } = useAuth()
   if (loading) {
      return (
         <div className="App">
            <h2>Loading.......</h2>
         </div>
      )
   }
   if (!account.email) {
      return <Navigate to="/login" />;
   }

   return children;

}

export default PrivateRoute;