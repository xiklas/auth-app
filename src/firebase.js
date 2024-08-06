// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBeCbyBvuO43y2ctAJwI_RTRBfEII1dgo",
  authDomain: "auth-app-2f3de.firebaseapp.com",
  projectId: "auth-app-2f3de",
  storageBucket: "auth-app-2f3de.appspot.com",
  messagingSenderId: "762068475897",
  appId: "1:762068475897:web:8dd6202b88b38ce9a42728",
  measurementId: "G-504DB1KDCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const appleProvider = new firebase.auth.OAuthProvider('apple.com');
