import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // register user with email password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  }

  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  }

  const logOut = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => unsubscribe();
  }, []);

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile)
  }

  const authInfo = { user, loading, createUser, loginUser, googleSignIn, logOut, updateUserProfile, githubSignIn };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;