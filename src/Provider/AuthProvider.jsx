import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loder, setLoder] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  // create user
  const createuser = (email, password) => {
    setLoder(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login
  const login = (email, password) => {
    setLoder(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google login 
  const googleLogin=()=>{
   return signInWithPopup(auth,googleProvider)
  }
  //signout
  const logOut = () => {
    setLoder(true);
    signOut(auth);
  };
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setLoder(false);
    });

    return () => {
      unsubcribe();
    };
  }, []);

  const allinfo = { user, loder, createuser, login, logOut,googleLogin };
  return (
    <AuthContext.Provider value={allinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
