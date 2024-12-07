import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebaseConfig';
import toast from 'react-hot-toast';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
function AuthProvider({ children }) {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //email password login
  const loginUser = (email, password) => {
    console.log(email,password)
    return signInWithEmailAndPassword(auth, email, password);
  };
  //sign in with google
  const googleLogin = () => {
    setLoading(true);
    setUser(null);
    return signInWithPopup(auth, googleProvider);
  };
  //sign in with github
  const githubLogin = () => {
    setLoading(true);
    setUser(null);
    return signInWithPopup(auth, githubProvider);
  };

  //update user profile
  const updateUserProfile = (name, profile) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: profile,
    });
  };

  //logOut
  const logOut = () => {
    setLoading(true);
    toast.error('User logged Out');
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const userInfo = {
    googleLogin,
    githubLogin,
    setUser,
    user,
    logOut,
    createUser,
    loginUser,
    loading,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
