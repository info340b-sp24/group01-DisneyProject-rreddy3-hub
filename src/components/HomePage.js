import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getDatabase, ref, onValue } from "firebase/database";

export function HomePage(props) {
    const { favorites, onFavoriteClick } = props;
    const [search, setSearch] = useState('');
    const [priceFilter, setPriceFilter] = useState('None');
    const [cuisineFilter, setCuisineFilter] = useState('None');
    const [ratingFilter, setRatingFilter] = useState('None');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const db = getDatabase();
        const mealsRef = ref(db, 'meals');
        onValue(mealsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const loadedMeals = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key],
                    liked: favorites.some(fav => fav.id === key)
                }));
                setMeals(loadedMeals);
            } else {
                setMeals([]);
            }
        });
    }, [favorites]);

    const renderRating = (meal) => {
        const rating = meal.userRating ? parseFloat(meal.userRating) : parseFloat(meal.rating);
        return rating;
    };

    const filterMeals = () => {
        return meals.filter(meal => {
            const mealRating = renderRating(meal);
            return (
                (priceFilter === 'None' || meal.price === priceFilter) &&
                (cuisineFilter === 'None' || meal.cuisine.includes(cuisineFilter)) &&
                (ratingFilter === 'None' || mealRating >= parseFloat(ratingFilter)) &&
                (search === '' || (meal.name && meal.name.toLowerCase().includes(search.toLowerCase())))
            );
        });
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="fa fa-star checked"></span>);
        }
        if (halfStar) {
            stars.push(<span key={stars.length} className="fa fa-star-half-o checked"></span>);
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={stars.length + i} className="fa fa-star"></span>);
        }
        return stars;
    };

    const handleClick = (index) => {
        const meal = meals[index];
        onFavoriteClick(meal);
        const updatedMeals = [...meals];
        updatedMeals[index].liked = !updatedMeals[index].liked;
        setMeals(updatedMeals);
        localStorage.setItem(`meal-${meal.id}`, JSON.stringify(updatedMeals[index].liked));
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
                            <option value="1">&#9733; & Up</option>
                            <option value="2">&#9733;&#9733; & Up</option>
                            <option value="3">&#9733;&#9733;&#9733; & Up</option>
                            <option value="4">&#9733;&#9733;&#9733;&#9733; & Up</option>
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
                                <div className="card mb-3" style={{ width: "25rem" }}>
                                    <img src={meal.image} className="card-img-top meal-image" alt={meal.name} />
                                    <div className="card-body">
                                        <h2 className="card-title">{meal.name}, {meal.restaurant}</h2>
                                        <button className="reviews-link btn" value={meal.name}>See reviews</button>
                                        <div className="stars">
                                            {renderStars(renderRating(meal))}
                                        </div>
                                        <p className="card-text rating">{renderRating(meal)} / 5 stars</p>
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
            </main>
        </div>
    );
}
