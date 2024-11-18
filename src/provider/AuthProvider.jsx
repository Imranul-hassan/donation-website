import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();
const [user, setUser] = useState({
    email: "imranul"
});

const AuthProvider = () => {

    const authInfo ={
        user,
        setUser
    }

    return <AuthContext.Provider value={authInfo}></AuthContext.Provider>
};

export default AuthProvider;