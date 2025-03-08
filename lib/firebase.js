// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPBnf35Ngne8nrCoeZVT5B2ja1NDhME-M",
  authDomain: "fir-app-bbd82.firebaseapp.com",
  projectId: "fir-app-bbd82",
  storageBucket: "fir-app-bbd82.firebasestorage.app",
  messagingSenderId: "575119759223",
  appId: "1:575119759223:web:4f013a6410741b890d7372"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };