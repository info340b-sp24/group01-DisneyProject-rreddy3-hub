import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import { App }  from './components/App';
import { BrowserRouter } from 'react-router-dom';

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
    <React.StrictMode>
      <App />
    </React.StrictMode> 
  </BrowserRouter>    
); 

