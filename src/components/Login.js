// Only logged in users can add meal 
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';

export function Login(props) {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
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
        <button className="google-log-in" onClick={signInWithGoogle}>
            <img src="img/images.png" alt="Google icon" style={{ width: '3rem', height: '2rem' }} />
            Sign in With Google
        </button>
    </div>
}





