// Only logged in users can add meal 
import React from 'react'; 
import { auth, provider } from '../firebaseConfig.js'; 
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


export function Login(props) {
    const setIsAuth = props.setIsAuth;  
    let navigate = useNavigate(); 
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true); 
            setIsAuth(true); 
            navigate("/addMeal"); 
        })
    }

    return <div className="loginPage">
        <header>
                <div className="header-text">
                    <h1>Sign in With Google to Add Meals</h1>
                    <p>Show others what it's like there now</p>
                </div>
            </header>
        <button className="login-with-google-btn" onClick={signInWithGoogle} style={{marginLeft: '0.5rem', marginBottom: '1rem'}}>
            Sign in With Google
        </button>
    </div> 
}
