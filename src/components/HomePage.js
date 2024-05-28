import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { db, analytics } from '../firebaseConfig.js'; 
import { collection, getDocs, setDoc, doc } from "firebase/firestore"; 

// import 'font-awesome/css/font-awesome.min.css';
// import 'https://fonts.googleapis.com/icon?family=Material+Icons';

export function HomePage() {
    const [search, setSearch] = useState('');
    const [priceFilter, setPriceFilter] = useState('None');
    const [cuisineFilter, setCuisineFilter] = useState('None');
    const [ratingFilter, setRatingFilter] = useState('None');
    const [meals, setMeals] = useState([]); 

    useEffect(() => {
        const fetchMeals = async () => {
            const mealsCollection = collection(db, "home");
            const mealsSnapshot = await getDocs(mealsCollection);
            const mealsList = mealsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setMeals(mealsList);
        };

        fetchMeals();
    }, []);

    const filterMeals = () => {
        return meals.filter(meal => {
            return (
                (priceFilter === 'None' || meal.price === priceFilter) &&
                (cuisineFilter === 'None' || meal.cuisine.includes(cuisineFilter)) &&
                (ratingFilter === 'None' || meal.rating >= parseFloat(ratingFilter)) &&
                (search === '' || meal.name && meal.name.toLowerCase().includes(search.toLowerCase()))
            );
        });
    };

    const handleClick = async (index) => {
        const newMeals = [...meals];
        newMeals[index].liked = !newMeals[index].liked;
        setMeals(newMeals);
        const meal = newMeals[index];
        await setDoc(doc(db, "home", meal.id), meal);
    };

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div>
            <header>
                <div className="header-text">
                    <div>
                        <h1>UW Crave</h1>
                        <input className="search"
                            type="text"
                            placeholder="Search for meals..."
                            value={search}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="Price">Price:</label>
                        <select className="price"
                            name="price"
                            id="price"
                            aria-label="price filter selection"
                            value={priceFilter}
                            onChange={e => setPriceFilter(e.target.value)}
                        >
                            <option value="None">Select price...</option>
                            <option value="$">$</option>
                            <option value="$$">$$</option>
                            <option value="$$$">$$$</option>
                            <option value="$$$$">$$$$</option>
                        </select>
                        <label htmlFor="Cuisine">Cuisine:</label>
                        <select className="cuisine"
                            name="cuisine"
                            id="cuisine"
                            aria-label="cuisine filter selection"
                            value={cuisineFilter}
                            onChange={e => setCuisineFilter(e.target.value)}
                        >
                            <option value="None">Select cuisine...</option>
                            <option value="Mediterranean">Mediterranean</option>
                            <option value="American">American</option>
                            <option value="Hawaiian">Hawaiian</option>
                            <option value="Korean">Korean</option>
                            <option value="Mexican">Mexican</option>
                            <option value="Vietnamese">Vietnamese</option>
                            <option value="Indian">Indian</option>
                            <option value="Boba">Boba</option>
                            <option value="Dessert">Dessert</option>
                        </select>
                        <label htmlFor="Rating">Rating:</label>
                        <select
                            name="rating"
                            id="rating"
                            aria-label="rating filter selection"
                            value={ratingFilter}
                            onChange={e => setRatingFilter(e.target.value)}
                        >
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
                        {filterMeals().map((meal, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card mb-3" style={{ width: "15rem" }}>
                                    <img src={meal.image} className="card-img-top" alt={`${meal.name} from ${meal.restaurant}`} />
                                    <div className="card-body">
                                        <h2 className="card-title">{meal.name}, {meal.restaurant}</h2>
                                        <button className="reviews-link btn">See reviews</button>
                                        <div className="stars">
                                            {[...Array(Math.floor(meal.rating))].map((_, i) => (
                                                <span key={i} className="fa fa-star checked"></span>
                                            ))}
                                            {meal.rating % 1 !== 0 && <span className="fa fa-star-half-o checked"></span>}
                                            {[...Array(5 - Math.ceil(meal.rating))].map((_, i) => (
                                                <span key={i} className="fa fa-star"></span>
                                            ))}
                                        </div> 
                                        <p className="card-text rating">{meal.rating} / 5 stars</p>
                                        <p className="card-text">{meal.price}</p>
                                        <p className="card-text">Cuisine: {meal.cuisine}</p>
                                        <button className="btn like-button" onClick={() => handleClick(index)}>
                                            <span className="material-icons" style={{ color: meal.liked ? 'red' : 'grey' }}>favorite_border</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main >
        </div >
    );
}