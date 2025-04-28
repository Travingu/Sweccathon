// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuvt7fp5mf7FSxSyk-2V6_E2ZB_4paW-U",
  authDomain: "lockedin-457818.firebaseapp.com",
//   databaseURL: "https://lockedin-457818-default-rtdb.firebaseio.com",
  projectId: "lockedin-457818",
//   storageBucket: "lockedin-457818.firebasestorage.app",
  messagingSenderId: "337055109814",
  appId: "1:337055109814:web:a6dc26c5b6982466da4c17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

/**
 * Signs the user in with a Google popup.
 * @returns A promise that resolves with the user's credentials.
 */
export function signInWithGoogle() {
  return signInWithPopup(auth, new GoogleAuthProvider());
}

/**
 * Signs the user out.
 * @returns A promise that resolves when the user is signed out.
 */
export function signOut() {
  return auth.signOut();
}

/**
 * Trigger a callback when user auth state changes.
 * @returns A function to unsubscribe callback.
 */
export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}