// src/components/Auth.js
import React, { useState, useEffect } from 'react';
import { auth, googleProvider, appleProvider } from '../firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

const Auth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };

  const signInWithApple = () => {
    signInWithPopup(auth, appleProvider);
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Sie sind angemeldet.</p>
          <button onClick={handleSignOut}>Abmelden</button>
        </div>
      ) : (
        <div>
          <p>Sie sind abgemeldet.</p>
          <button onClick={signInWithGoogle}>Mit Google anmelden</button>
          <button onClick={signInWithApple}>Mit Apple anmelden</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
