import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../FirebaseConfig/firebase.config";

export const AuthContext=createContext(null);

const AuthContextProvider = ({children}) => {
    const[user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    const auth=getAuth(app);

    const createUser=(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const userLogin=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const userLogout=()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>unsubscribe();

    },[auth])

    const authInfo={
        user,
        createUser,
        userLogin,
        userLogout,
        loading,
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