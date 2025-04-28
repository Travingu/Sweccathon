// src/firebase.js
// IMPORTANT: Use Firebase v9+ modular CDN imports or via npm bundler
// If using plain HTML/JS with modules, import from Firebase CDN URLs.

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js';

// Your Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyCuvt7fp5mf7FSxSyk-2V6_E2ZB_4paW-U',
  authDomain: 'lockedin-457818.firebaseapp.com',
  projectId: 'lockedin-457818',
  messagingSenderId: '337055109814',
  appId: '1:337055109814:web:a6dc26c5b6982466da4c17'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

// Sign-in helper
export function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}

// Sign-out helper
export function signOut() {
  return auth.signOut();
}

// Auth state listener
export function onAuthStateChangedHelper(callback) {
  return onAuthStateChanged(auth, callback);
}
