"use client";
import { auth, db } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc } from "firebase/firestore";
import { createContext, useState, useEffect, useContext } from "react";

const authContext = createContext();

export function useAuth() {
  return useContext(authContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  //auth handlers
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    setUserData(null);
    setCurrentUser(null);
    return signOut(auth);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        setLoading(true);
        setCurrentUser(user);
        if (!user) {
          return;
        }

        //if user exist fetch user data
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        let firebaseData = {};
        if (docSnap.exists()) {
          firebaseData = docSnap.data();
          console.log(firebaseData);
        }
        setUserData(firebaseData);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);
  const value = {
    currentUser,
    userData,
    signup,
    login,
    logout,
    loading,
    setUserData,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}
