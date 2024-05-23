import React, { useState } from 'react';
import { MealPage } from './MealPage';
import { AddMeal } from './AddMeal.js'; 
import { HomePage } from './HomePage.js';
import { FavoritesList } from './FavoritesList.js';
import { Routes, Route, Navigate, Link } from 'react-router-dom'; 

export function App(props) {
    return (
      <div>
        {/* Nav Bar */}
        <nav>
            <div id="hamburger-menu">
                <a href="#"><i className="fa fa-bars" aria-label="menu"></i></a>
            </div>
            <div className="laptop-nav">
                <Link to="home"><span className="material-icons" aria-label="Home">home</span></Link> 
                <button type="button" class="btn btn-light custom-color" aria-labelledby="favorites list">
                    <Link to="favorites">Favorites &#x2665;</Link>
                </button>
                <button type="button" class="btn btn-light custom-color" aria-labelledby="add meal form">
                    <Link to="addMeal">Add Meal</Link>
                </button>
            </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route index element={<HomePage />}/>
          <Route path="home" element={<HomePage />}/>
          {/* Change meal page to be dynamic */}
          {/* <Route path="mealPage/:mealID" element={<MealPage />}/> */}
          <Route path="mealPage" element={<MealPage />}/> 
          <Route path="addMeal" element={<AddMeal />}/>
          <Route path="favorites" element={<FavoritesList />}/>
        </Routes>

        {/* Chipotle Meal Page */}
        <MealPage />
        
        {/* Footer */}
        <footer>
                <p>&copy; Julie Noh, Kyra Diaz, Tina Song, & Rishita Reddy & INFO 340</p>
            </footer>
      </div>
    )
  }
