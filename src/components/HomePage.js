import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import 'https://fonts.googleapis.com/icon?family=Material+Icons';

export function HomePage() {
    const [search, setSearch] = useState('');
    const [priceFilter, setPriceFilter] = useState('None');
    const [cuisineFilter, setCuisineFilter] = useState('None');
    const [ratingFilter, setRatingFilter] = useState('None');
    const [meals, setMeals] = useState([

        {
            name: "Chicken Bowl",
            restaurant: "Chipotle",
            image: "img/chipotle-bowl.jpg",
            rating: 3,
            price: "$",
            cuisine: "Mexican",
            liked: false
        },
        {
            name: "Traditional Milk Tea",
            restaurant: "Don't Yell At Me",
            image: "img/dont-yell-at-me.png",
            rating: 4,
            price: "$",
            cuisine: "Boba",
            liked: false
        },
        {
            name: "Paneer Burger",
            restaurant: "Burger Hut",
            image: "img/burger-hut.png",
            rating: 4,
            price: "$",
            cuisine: "Indian, American",
            liked: false
        },
        {
            name: "Beef Pho",
            restaurant: "Pho Shizzle",
            image: "img/pho-shizzle.png",
            rating: 4,
            price: "$",
            cuisine: "Vietnamese",
            liked: false
        },
        {
            name: "Aladdin's Fries",
            restaurant: "Aladdins",
            image: "img/alladins-fries.png",
            rating: 4.25,
            price: "$",
            cuisine: "Mediterranean",
            liked: false
        },
        {
            name: "Black Milk Tea",
            restaurant: "TP Tea",
            image: "img/tp-tea.jpg",
            rating: 4,
            price: "$",
            cuisine: "Boba",
            liked: false
        },
        {
            name: "Salmon and Ahi Poke Bowl",
            restaurant: "Hiroshi's",
            image: "img/hiroshis.png",
            rating: 5,
            price: "$$",
            cuisine: "Hawaiian",
            liked: false
        },
        {
            name: "Chocolate and Vanilla Ice Cream Combo",
            restaurant: "Sweet Alchemy",
            image: "img/sweet-alchemy.jpg",
            rating: 5,
            price: "$$",
            cuisine: "Dessert",
            liked: false
        },
        {
            name: "Chicken Rice Bowl and Kimchi Mac Salad Combo",
            restaurant: "Chi Mac",
            image: "img/chi-mac.jpg",
            rating: 3,
            price: "$$$",
            cuisine: "Korean",
            liked: false
        },
        {
            name: "Pollo Burrito",
            restaurant: "Agua Verde",
            image: "img/agua-verde.jpg",
            rating: 4,
            price: "$$$$",
            cuisine: "Mexican",
            liked: false
        },
        {
            name: "Cumin Lamb Biang Noodles",
            restaurant: "Xi'an Noodles",
            image: "img/xian-noodles.jpg",
            rating: 5,
            price: "$$",
            cuisine: "Chinese",
            liked: false
        },
        {
            name: "Banh Mi Bowl",
            restaurant: "Sizzle and Crunch",
            image: "img/sizzle-and-crunch.png",
            rating: 5,
            price: "$",
            cuisine: "Vietnamese",
            liked: false
        }
    ]);

    // used imported useEffect
    useEffect(() => {
        const savedMeals = JSON.parse(localStorage.getItem('likedMeals'));
        setMeals(savedMeals || meals);
    }, []);



    const filterMeals = () => {
        return meals.filter(meal => {
            return (
                (priceFilter === 'None' || meal.price === priceFilter) &&
                (cuisineFilter === 'None' || meal.cuisine === cuisineFilter) &&
                (ratingFilter === 'None' || meal.rating >= parseFloat(ratingFilter))
            );
        });
    };

    const handleClick = (index) => {
        const newMeals = [...meals];
        newMeals[index].liked = !newMeals[index].liked;
        setMeals(newMeals);
    };

    return (
        <div>
            <header>
                <div className="header-text">
                    <h1>UW Crave</h1>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <div>
                        <label htmlFor="Price">Price:</label>
                        <select
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
                        <select
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
