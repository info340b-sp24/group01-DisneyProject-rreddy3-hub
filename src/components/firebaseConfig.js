import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiToIJV84aUP1lr8X5_SMfTKMZfr2b-Dc",
  authDomain: "uwcrave.firebaseapp.com",
  projectId: "uwcrave",
  storageBucket: "uwcrave.appspot.com",
  messagingSenderId: "665330985758",
  appId: "1:665330985758:web:74ac1e24718db6361b770f",
  measurementId: "G-S84WZYQ9DQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics };