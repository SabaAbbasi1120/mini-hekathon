// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKoiTI4XglJnZpgvw-qwo0IWMfouqzdoQ",
  authDomain: "landing-page-b9605.firebaseapp.com",
  databaseURL: "https://landing-page-b9605-default-rtdb.firebaseio.com/", // Ensure this is correct
  projectId: "landing-page-b9605",
  storageBucket: "landing-page-b9605.appspot.com",
  messagingSenderId: "1011383745087",
  appId: "1:1011383745087:web:54b7b30e8822acebd5968a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
export const database = getDatabase(app);