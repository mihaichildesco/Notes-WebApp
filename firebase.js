// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMSvLiSNTWkPeIx8fKeVkdcwdB0JWm62s",
  authDomain: "noteapp-22ea9.firebaseapp.com",
  projectId: "noteapp-22ea9",
  storageBucket: "noteapp-22ea9.appspot.com",
  messagingSenderId: "254411702215",
  appId: "1:254411702215:web:7fe9bd3d6adbf79bb9a3e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
