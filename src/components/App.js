import React, { useState } from 'react';
import { MealPage } from './MealPage';
import { AddMeal } from './AddMeal.js'; 
import { HomePage } from './HomePage.js';
import { FavoritesList } from './FavoritesList.js';

export function App(props) {
    return (
      <div>
        {/* Nav Bar */}
        <nav>
            <div id="hamburger-menu">
                <a href="#"><i className="fa fa-bars" aria-label="menu"></i></a>
            </div>
            <div className="laptop-nav">
                <a href="index.html"><span className="material-icons" aria-label="Home">home</span></a> 
                <button type="button" class="btn btn-light custom-color" aria-labelledby="favorites list">
                    <a href="favorites-list.html">Favorites &#x2665;</a>
                </button>
                <button type="button" class="btn btn-light custom-color" aria-labelledby="add meal form">
                    <a href="add-meal.html">Add Meal</a>
                </button>
            </div>
        </nav>

        {/* <HomePage /> */}
        {/* <MealPage /> */}
        <FavoritesList />
        {/* <AddMeal /> */}

        {/* Footer */}
        <footer>
                <p>&copy; Julie Noh, Kyra Diaz, Tina Song, & Rishita Reddy & INFO 340</p>
            </footer>
      </div>
    )
  }
