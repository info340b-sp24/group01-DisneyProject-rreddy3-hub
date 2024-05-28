import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'; 


const firebaseConfig = {
  apiKey: "AIzaSyBiToIJV84aUP1lr8X5_SMfTKMZfr2b-Dc",
  authDomain: "uwcrave.firebaseapp.com",
  projectId: "uwcrave",
  storageBucket: "uwcrave.appspot.com",
  messagingSenderId: "665330985758",
  appId: "1:665330985758:web:74ac1e24718db6361b770f",
  measurementId: "G-S84WZYQ9DQ"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const analytics = getAnalytics(app); 

export const auth = getAuth(app); 
export const provider = new GoogleAuthProvider(); 

export { db, analytics };