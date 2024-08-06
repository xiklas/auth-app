import React, {useState, useEffect} from "react";
import {auth, googleProvider, appleProvider} from "../firebase";

const Auth = () => {

    const [user, setUser] = useState(null);

    useEffect(()=> {

        const unsubscribe  = auth.onAuthStateChanged((user) => {

            if (user){
                setUser(user);
            }else{
                setUser(null);
            }
        });
        return () => unsubscribe();
    },[]);

    const signInWithGoogle = () => {
        auth.signInWithPopup(googleProvider);
    };
    const signInWithApple = () => {
        auth.signInWithPopup(appleProvider);
    };
    const signOut = () => {
        auth.signOut();
    };

    return (
        <div>
          {user ? (
            <div>
              <p>Sie sind angemeldet.</p>
              <button onClick={signOut}>Abmelden</button>
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
