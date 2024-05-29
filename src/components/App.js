import React, { useState } from 'react';
import { MealPage } from './MealPage';
import { AddMeal } from './AddMeal.js';
import { HomePage } from './HomePage.js';
import { FavoritesList } from './FavoritesList.js';
import { Login } from './Login.js';
import { getAuth } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';

// import data
// import INITIAL_REVIEWS from '../data/intitialReviewsData.json';

export function App(props) {
  const auth = getAuth(); 
  const [isAuth, setIsAuth] = useState(false);
  let navigate = useNavigate();
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    })
  }

  // meal card stuff
  const [currentReview, setCurrentReview] = useState(""); // if a user hasn't chosen a meal, then default to nothing 

  // function to update current channel
  const updateCurrentReview = (reviewName) => {
    setCurrentReview(reviewName);
  }

  return (
    <div>
      {/* Mobile Hamburger Nav */}
      <nav id="hamburger-menu" className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-bars"></i>
          </button>
        </div>

        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-body-tertiary shadow-3 p-4">
            <button className="btn btn-link btn-block border-bottom m-0">
              <Link to="home">Home</Link>
            </button>
            <button className="btn btn-link btn-block border-bottom m-0">
              <Link to="favorites">Favorites</Link>
            </button>
            {isAuth && <button className="btn btn-link btn-block m-0">
              <Link to="addMeal">Add Meal</Link>
            </button>}
            {!isAuth ? <button className="btn btn-link btn-block m-0">
              <Link to="login">Login</Link>
            </button> : <button className="btn btn-link" onClick={signUserOut} style={{ fontSize: '0.8rem', padding: '5px 10px', marginTop: '8px'}}>Log Out</button>}
          </div>
        </div>
      </nav>

      {/* Laptop Nav */}
      {/* <nav>
            <div className="laptop-nav">
                <button type="button" className="btn btn-light custom-color">
                  <Link to="home"><span className="material-icons" aria-label="Home">home</span></Link> 
                </button>
                <button type="button" className="btn btn-light custom-color" aria-labelledby="favorites list">
                    <Link to="favorites">Favorites &#x2665;</Link>
                </button>
                <button type="button" className="btn btn-light custom-color" aria-labelledby="add meal form">
                    <Link to="addMeal">Add Meal</Link>
                </button>
            </div>
        </nav> */}

      {/* Trying something new for laptop nav */}
      <nav id="laptop-nav" className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="home" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="favorites" className="nav-link">Favorites</Link>
            </li>
            {isAuth && <li className="nav-item">
              <Link to="addMeal" className="nav-link" href="#">Add Meal</Link>
            </li>} 
            {!isAuth ? <li className="nav-item">
              <Link to="login" className="nav-link" href="#">Login</Link>
            </li> : <button className="btn btn-link" onClick={signUserOut} style={{ fontSize: '0.8rem', padding: '5px 10px' }}>Log Out</button>}
          </ul>
        </div>
      </nav>

        {/* Routes */}
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage updateCurrentReview={updateCurrentReview} currentReview={currentReview}/>}>
            {/* Change meal page to be dynamic */}
            <Route path=":mealCard" element={<MealPage updateCurrentReview={updateCurrentReview} currentReview={currentReview}/>}/>
          </Route>
          {/* <Route path="mealPage" element={<MealPage />} /> */}
          <Route path="addMeal" element={<AddMeal />} />
          <Route path="favorites" element={<FavoritesList />} />
          <Route path="login" element={<Login setIsAuth={setIsAuth} />} />
        </Routes> 

        {/* Chipotle Meal Page */}
        <MealPage updateCurrentReview={updateCurrentReview} currentReview={currentReview} />
        
        {/* Footer */}
        <footer>
                <p>&copy; Julie Noh, Kyra Diaz, Tina Song, & Rishita Reddy & INFO 340</p>
            </footer>
      </div>
    )
  }
