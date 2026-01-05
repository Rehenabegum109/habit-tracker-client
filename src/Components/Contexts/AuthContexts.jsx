import React, { createContext, useState, useEffect, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";


export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  
const signup = (email, password, displayName, photoURL) => {
  setLoading(true);

  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Update profile with name & photo
      return updateProfile(user, {
        displayName: displayName,
        photoURL: photoURL,
      }).then(() => {
        setUser({ ...user, displayName, photoURL });
        setLoading(false);
      });
    })
    .catch(() => setLoading(false));
};

  // Login function
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setLoading(false);
      });
  };

  // Google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        setLoading(false);
      });
  };

  // Logout
  const logout = () => {
    setLoading(true);
    return signOut(auth).then(() => {
      setUser(null);
      setLoading(false);
    });
  };

  
  const authInfo = {
    user,
    loading,
    signup,
    login,
    googleLogin,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};
export const UseAuth = () => useContext(AuthContext);



// // src/Components/Contexts/AuthContexts.jsx
// import React, { createContext, useState, useEffect, useContext } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   updateProfile,
//   GoogleAuthProvider,
//   signInWithPopup
// } from "firebase/auth";
// import { auth } from "../../Firebase/firebase.config";

// export const AuthContext = createContext(null);
// const googleProvider = new GoogleAuthProvider();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         setUser({
//           uid: currentUser.uid,
//           email: currentUser.email,
//           displayName: currentUser.displayName,
//           photoURL: currentUser.photoURL,
//           role: "user"
//         });
//       } else {
//         setUser(null);
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const signup = async (email, password, displayName, photoURL) => {
//     setLoading(true);
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     await updateProfile(res.user, { displayName, photoURL });
//     setUser({
//       uid: res.user.uid,
//       email: res.user.email,
//       displayName,
//       photoURL,
//       role: "user"
//     });
//     setLoading(false);
//   };

//   const login = async (email, password) => {
//     setLoading(true);
//     const res = await signInWithEmailAndPassword(auth, email, password);
//     setUser({
//       uid: res.user.uid,
//       email: res.user.email,
//       displayName: res.user.displayName,
//       photoURL: res.user.photoURL,
//       role: "user"
//     });
//     setLoading(false);
//     return res.user;
//   };

//   const googleLogin = async () => {
//     setLoading(true);
//     const res = await signInWithPopup(auth, googleProvider);
//     setUser({
//       uid: res.user.uid,
//       email: res.user.email,
//       displayName: res.user.displayName,
//       photoURL: res.user.photoURL,
//       role: "user"
//     });
//     setLoading(false);
//     return res.user;
//   };

//   const logout = async () => {
//     setLoading(true);
//     await signOut(auth);
//     setUser(null);
//     setLoading(false);
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, login, signup, googleLogin, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const UseAuth = () => useContext(AuthContext);


