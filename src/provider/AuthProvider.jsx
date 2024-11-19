
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const authContext = createContext();

const AuthProvider = ({route}) => {

    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [loading ,setLoading] = useState(true);
    
    const handleRegister = (email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin = (email, password)=>{
       return signInWithEmailAndPassword(auth, email,password)
    }
    const handleGoogleLogin=()=>{
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            console.log(result)
            setUser(result.user)
        })
        .catch((error)=>{
            console.log(error)
            setUser(null)
        })
    }
    const manageProfile = (name, image)=>{
       return  updateProfile(auth.currentUser,{
            displayName:name, photoURL:image
        })
    }
    const handleLogOut = ()=>{
        signOut(auth)
    }

    const authInfo ={
        handleRegister,
        handleLogin,
        handleGoogleLogin,
        handleLogOut,
        manageProfile,
        user,
        setUser,
        loading,
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser);
            if(currentUser){
                setUser(currentUser)
            }
            else{
                setUser(null)
            }
            setLoading(false)
            return()=>{
                unsubscribe()
            }
        })
    },[])
    return (
    <div>
        <authContext.Provider value={authInfo}>
            {
                route
            }
        </authContext.Provider>
    </div>
    );
};

export default AuthProvider;