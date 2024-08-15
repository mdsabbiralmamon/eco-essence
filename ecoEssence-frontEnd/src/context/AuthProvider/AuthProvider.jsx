import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../../utils/Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // creating a new user provider for email sign in
  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Creating Google Provider for sign in
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  }

  // sign in a user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //LogOut user
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // update name 
  const updateUserName = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name
    });
  };

  //observing logged in user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      console.log("observing", loggedInUser);
      setUser(loggedInUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [user]);

  const authInfo = { user, loading, signUpUser, signInUser, logOutUser, googleSignIn, updateUserName };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;