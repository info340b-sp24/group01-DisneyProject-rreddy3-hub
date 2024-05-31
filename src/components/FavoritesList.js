import React, { useEffect } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";

export function FavoritesList({ favorites, renderStars, renderRating }) {

    useEffect(() => {
        const db = getDatabase();
        const mealsRef = ref(db, 'meals');
        onValue(mealsRef, (snapshot) => {
            const data = snapshot.val();
        });
    }, []); 

    return (
        <div>
            <header>
                <div className="header-text">
                    <h1>UW Crave</h1>
                    <input type="text" placeholder="Search..." />
                    <div>
                        <label htmlFor="Price">Price:</label>
                        <select name="price" id="price" aria-label="price filter selection">
                            <option value="None">Select price...</option>
                            <option value="$">$</option>
                            <option value="$$">$$</option>
                            <option value="$$$">$$$</option>
                            <option value="$$$$">$$$$</option>
                        </select>

                        <label htmlFor="Cuisine">Cuisine:</label>
                        <select name="cuisine" id="cuisine" aria-label="cuisine filter selection">
                            <option value="None">Select cuisine...</option>
                            <option value="Mediterranean">Mediterranean</option>
                            <option value="Thai">Thai</option>
                            <option value="Korean">Korean</option>
                            <option value="Mexican">Mexican</option>
                            <option value="Vietnamese">Vietnamese</option>
                            <option value="Indian">Indian</option>
                            <option value="Boba">Boba</option>
                        </select>

                        <label htmlFor="Rating">Rating:</label>
                        <select name="rating" id="rating" aria-label="rating filter selection">
                            <option value="None">Select rating...</option>
                            <option value="1">&#9733;</option>
                            <option value="2">&#9733;&#9733;</option>
                            <option value="3">&#9733;&#9733;&#9733;</option>
                            <option value="4">&#9733;&#9733;&#9733;&#9733;</option>
                            <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
                        </select>
                    </div>
                </div>
            </header>
            <main>
                <div className="container">
                    <div className="row">
                        {favorites.map((meal, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card mb-3" style={{ width: "25rem" }}>
                                    <div className="card-body">
                                        <h2 className="card-title">{meal.name}, {meal.restaurant}</h2>
                                        <button className="reviews-link btn" value={meal.name}>See reviews</button>
                                        <div className="stars">
                                            {renderStars(renderRating(meal))}
                                        </div>
                                        <p className="card-text rating">{renderRating(meal)} / 5 stars</p>
                                        <p className="card-text">{meal.price}</p>
                                        <p className="card-text">Cuisine: {meal.cuisine}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
