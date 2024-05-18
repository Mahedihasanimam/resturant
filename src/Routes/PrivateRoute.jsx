import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loder}=useContext(AuthContext)
    if(loder)return <h3 className="flex absolute top-1/2 left-1/2 text-2xl">loading....</h3>
    if(user){
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;