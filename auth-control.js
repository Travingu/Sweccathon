// auth-control.js
// Dynamically injects Sign In / Sign Out button into the navbar
// Depends on firebase.js exporting signInWithGoogle, signOut, onAuthStateChangedHelper

import { signInWithGoogle, signOut, onAuthStateChangedHelper } from './firebase/firebase.js';

// Grab the placeholder container in the navbar
const authControl = document.getElementById('auth-control');

// Listen for Firebase auth state changes
onAuthStateChangedHelper(user => {
  // Clear out any existing button
  authControl.innerHTML = '';

  // Create a new button
  const btn = document.createElement('button');
  btn.className = 'btn';

  if (user) {
    // If user is signed in, show Sign Out
    btn.textContent = 'Sign Out';
    btn.onclick = () => signOut();
  } else {
    // If no user, show Sign In
    btn.textContent = 'Sign In';
    btn.onclick = () => signInWithGoogle();
  }

  // Add the button into the navbar
  authControl.appendChild(btn);
});