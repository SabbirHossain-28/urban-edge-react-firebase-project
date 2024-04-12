import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../FirebaseConfig/firebase.config";

export const AuthContext=createContext(null);

const AuthContextProvider = ({children}) => {
    const[user,setUser]=useState(null);

    const auth=getAuth(app);

    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
       const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser);
            setUser(currentUser);
        })
        return ()=>unsubscribe();

    },[])

    const authInfo={
        user,
        createUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContextProvider.propTypes={
    children:PropTypes.node,
}

export default AuthContextProvider;