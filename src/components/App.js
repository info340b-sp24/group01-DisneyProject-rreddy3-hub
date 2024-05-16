import React, { useState } from 'react';
import { MealPage } from './MealPage';
import { AddMeal } from './AddMeal.js'; 
import { HomePage } from './HomePage.js';
import { FavoritesList } from './FavoritesList.js';

export function App(props) {
    return (
      <div>
        <HomePage />
        {/* <MealPage />*/}
        {/* <FavoritesList />*/}
        {/* <AddMeal />*/}
      </div>
    )
  }
