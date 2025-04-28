// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCuvt7fp5mf7FSxSyk-2V6_E2ZB_4paW-U",
   authDomain: "lockedin-457818.firebaseapp.com",
   databaseURL: "https://lockedin-457818-default-rtdb.firebaseio.com",
   projectId: "lockedin-457818",
   storageBucket: "lockedin-457818.firebasestorage.app",
   messagingSenderId: "337055109814",
   appId: "1:337055109814:web:a6dc26c5b6982466da4c17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Database
const db = getDatabase();

var company = document.querySelector("#company");
var rounds = document.querySelector("#rounds");
var questions = document.querySelector("#questions");
var subBtn = document.querySelector(".submit-button");

function InsertData() {
   set(ref(db, "Data"),{
       Company: company.value,
       Rounds: rounds.value,
       Questions: questions.value
   })
   .then(()=>{
       alert("Data added successfully");
   })
   .catch((error)=>{
       alert(error);
   });
}

subBtn.addEventListener('click', InsertData);

// // Function to store user input in Firebase
// function storeUserData(inputValue) {
//    const userRef = ref(database, 'userInputs/' + Date.now()); // Use timestamp as a unique key
//    set(userRef, {
//      input: inputValue,
//    }).then(() => {
//      console.log("Data stored successfully!");
//    }).catch((error) => {
//      console.error("Error storing data: ", error);
//    });
//  }
 
//  // Function to display stored data from Firebase
//  function displayUserInputs() {
//    const userRef = ref(database, 'userInputs/');
//    get(userRef).then((snapshot) => {
//      if (snapshot.exists()) {
//        const data = snapshot.val();
//        const displayArea = document.getElementById('display-area');
//        displayArea.innerHTML = ""; // Clear previous data
 
//        for (const key in data) {
//          const userInput = data[key].input;
//          const div = document.createElement('div');
//          div.textContent = userInput;
//          displayArea.appendChild(div);
//        }
//      } else {
//        console.log("No data available");
//      }
//    }).catch((error) => {
//      console.error("Error getting data: ", error);
//    });
//  }
 
//  // Function to be called when the user submits their input
//  function submitInput() {
//    const inputValue = document.getElementById('user-input').value;
//    if (inputValue) {
//      storeUserData(inputValue);  // Store the input in Firebase
//      displayUserInputs();        // Display the updated inputs
//      document.getElementById('user-input').value = ''; // Clear the input field
//    } else {
//      alert("Please enter something.");
//    }
//  } 