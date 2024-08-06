import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";
// Import "firebase/analytics" if you need it
import { getAnalytics } from "firebase/analytics";

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

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider('apple.com');

export { auth, googleProvider, appleProvider };