import { useContext } from "react";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"

const PrivetRoute = ({children}) => {
    const {user ,loading}= useContext(AuthContext);

    if(loading){
        return <div className=" min-h-screen loading loading-bars loading-lg mx-auto flex items-center"></div>
    }

    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

PrivetRoute.propTypes={
    children:PropTypes.node,
}
export default PrivetRoute;