import React from 'react';

export function FavoritesList() {
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

                    </div>
                </div>
            </main>
        </div>
    );
}

function MealCard({ meal, removeFromFavorites }) {
    return (
        <div className="col-md-4">
            <div className="card mb-3" style={{ width: '15rem' }}>
                <img src={meal.img} alt={meal.name} className="card-img-top pb-3" />
                <div className="card-body">
                    <h5 className="favorite-title">{meal.name}</h5>
                    <button className="reviews-link btn">See reviews</button>
                    <div className="stars mt-2" style={{ paddingLeft: '5px' }}>
                        {[...Array(5)].map((star, index) => (
                            <span key={index} className={`fa fa-star ${index < meal.userRating ? 'checked' : ''}`}></span>
                        ))}
                    </div>
                    <p className="rating">{meal.userRating} / 5 stars</p>
                    <p className="price">{meal.price}</p>
                    <p className="cuisine">Cuisine: {meal.cuisine}</p>
                    <button type="button" className="btn btn-light" onClick={() => removeFromFavorites(meal.id)}>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}
