import React, { useState } from 'react';

// returns entire meal page body
export function MealPage(props) {
    return(
        <body>
            <nav>
                <div id="hamburger-menu"><a href="#"><i className="fa fa-bars" aria-label="menu"></i></a></div>
                <div className="laptop-nav">
                    <a href="index.html"><span className="material-icons" aria-label="Home">home</span></a> 
                    <button type="button" className="btn" aria-labelledby="favorites list">
                        <a href="favorites-list.html">Favorites &#x2665;</a>
                    </button>
                    <button type="button" className="btn btn-light" aria-labelledby="add meal form">
                        <a href="add-meal.html">Add Meal</a>
                    </button>
                </div>
            </nav>
            
            {/* <!-- Description (Name, Rating, Heart, Restaurant, Location, Price) --> */}
        
            {/* Initial Review Card */}
            
            {/* <!-- Add Review... --> */}
            <AddReviewAndRating />
        
            {/* <!-- Previous Reviews --> */}
            <OtherReviews />

            <footer>
                <p>&copy; Julie Noh, Kyra Diaz, Tina Song, & Rishita Reddy & INFO 340</p> 
            </footer>
        </body>
    );
}

// Generates meal description header; will expect a prop called MealData that is an Object
    // Example:
        // {name:'Aladdin's Fries', rating: 3, restaurant:'Aladdin's Gyro-cery',
        // address:'Aladdin Gyro-Cery & Deli, 4139 University Wy NE, Seattle, WA 98105',
        // locationLink: 'https://www.google.com/maps/dir/47.6512256,-122.3196672/aladdins+gyrocery/@47.6543674,-122.3275141,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x549014f359463677:0xd7b29936f0579d15!2m2!1d-122.3133702!2d47.657982?entry=ttu',
        // price:$, cuisine:'Mediterranean'}
function MealDescription({ MealData }) {
    // access props 
    let { name, rating, restaurant, address, locationLink, price, cuisine } = MealData;

    // call and generate star ratings here
    // let stars = StarRatings(rating);

    return(
        <header>
            {/* <!-- Description (Name, Rating, Heart, Restaurant, Location, Price) --> */}
            <h1>{name}</h1> 
            <button className="favorite btn btn-light">
                <span className="material-symbols-outlined">
                heart_plus
                </span>
            </button>
            <h2>{address} ({price})</h2>

            {/* Will need to replace this later with {stars} */}
            <div className="stars mt-2" style="padding-left: 5px;">
                <span className="fa fa-star checked"></span>   
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
            </div>

            <p className="rating">{rating} / 5 stars</p>
    
            <p>Mediterranean</p>
            <a href={locationLink}>
                Aladdin Gyro-Cery & Deli, 4139 University Wy NE, Seattle, WA 98105
            </a>
        </header>
    );
}

// Generates a star rating div depending on the given meal's rating;
// if the rating is a decimal, it will round to the nearest whole number
// NOT SURE IF THIS WORKS
/*
function StarRatings({rating}) {
    let stars = () => {
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
               return <span className="fa fa-star checked"></span>;
            }
            else {
                return <span className="fa fa-star"></span>;
            }
        }
    }

    return(
        <div className="stars mt-2" style="padding-left: 5px;">
            {stars}
        </div>
    );
}
*/

function InitialReview( {InitialReviewData}) {
    return(
        <main>

        </main>
    );
}

function AddReviewAndRating() {
    return(
        <div className="add-review">
            <form>
                <p>Write a review...</p>
                <div className="input-group mb-3">
                    <label for="new-review" className="input-group-text">Review:</label>
                    <textarea className="form-control" id="review-input" rows="3"></textarea>
                </div>
            </form>

            <p>Leave a rating...</p>
            <div className="input-group mb-3">
                <label for="rating-input" className="input-group-text">Rating:</label>
                <div className="stars mt-2" style="padding-left: 5px;">
                    <span className="fa fa-star notchecked"></span>
                    <span className="fa fa-star notchecked"></span>
                    <span className="fa fa-star notchecked"></span>
                    <span className="fa fa-star notchecked"></span>
                    <span className="fa fa-star notchecked"></span>
                </div>
            </div>
        </div>
    );
}

function OtherReviews() {
    return(
        <div classNa="reviews">
                
        </div>
    );
}