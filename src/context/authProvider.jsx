import { createContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import PropTypes from "prop-types";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setisLoading] = useState(true)

     function signInWithGoogle() {
         const provider = new GoogleAuthProvider();
         return signInWithPopup(auth,provider);
    }
   
    function logout() {
        return signOut(auth);
    }


    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
            setisLoading(false);
        });
    }, []);

    return (
        <AuthContext.Provider value={{ user, isLoading, signInWithGoogle, logout }}>{children}
        </AuthContext.Provider>


    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};



