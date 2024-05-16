import React, { useState } from 'react';

// returns entire meal page body
export function MealPage(props) {
    return(
        <div className="meal-body">
            {/* Navigation Bar */}
            <NavigationBar />

            {/* <!-- Description (Name, Rating, Heart, Restaurant, Location, Price) --> */}
            <MealDescription />

            {/* Initial Review Card */}
            <InitialReview />

            {/* <!-- Add Review... --> */}
            <AddReviewAndRating />
        
            {/* <!-- Previous Reviews --> */}
            <OtherReviews />

            <footer>
                <p>&copy; Julie Noh, Kyra Diaz, Tina Song, & Rishita Reddy & INFO 340</p> 
            </footer>
        </div>
    );
}

function NavigationBar() {
    return(
        <nav>
            <div id="hamburger-menu">
                <a href="#"><i className="fa fa-bars" aria-label="menu"></i></a>
            </div>
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
    );
}

// Generates meal description header; will expect a prop called MealData that is an Object
    // Example:
        // {name:'Aladdin's Fries', rating: 3, restaurant:'Aladdin's Gyro-cery',
        // address:'Aladdin Gyro-Cery & Deli, 4139 University Wy NE, Seattle, WA 98105',
        // locationLink: 'https://www.google.com/maps/dir/47.6512256,-122.3196672/aladdins+gyrocery/@47.6543674,-122.3275141,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x549014f359463677:0xd7b29936f0579d15!2m2!1d-122.3133702!2d47.657982?entry=ttu',
        // price:$, cuisine:'Mediterranean'}
function MealDescription({ MealData }) {
    // access props (will implement these later)
    // let { name, rating, restaurant, address, locationLink, price, cuisine } = MealData;

    // call and generate star ratings here
    // let stars = StarRatings(rating);

    return(
        <header>
            {/* <!-- Description (Name, Rating, Heart, Restaurant, Location, Price) --> */}
            <h1>Aladdin's Fries</h1> 
            <button className="favorite btn btn-light">
                <span className="material-symbols-outlined">
                heart_plus
                </span>
            </button>
            <h2>Aladdin's Gyro-Cery ($)</h2>

            {/* Will need to replace this later with {stars} */}
            <div className="stars mt-2" style={{paddingLeft: "5px"}}>
                <span className="fa fa-star checked"></span>   
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
            </div>

            <p className="rating">3.75 / 5 stars</p>
    
            <p>Mediterranean</p>
            <a href="https://www.google.com/maps/dir/47.6512256,-122.3196672/aladdins+gyrocery/@47.6543674,-122.3275141,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x549014f359463677:0xd7b29936f0579d15!2m2!1d-122.3133702!2d47.657982?entry=ttu">
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

function InitialReview( {InitialReviewData} ) {
    return(
        <main>          
            <div className="card">
                {/* <!-- Image of Meal --> */}
                <img id="meal-img" className="card-img-top" src="img/alladins-fries.png" alt="Aladdin Fries"></img>

                <div className="card-body">
                    {/* <!-- Initial Review --> */}
                    <h3 className="card-title">Review by: notkyraxo</h3>
                    {/* <!-- Rating --> */}
                    <div className="stars mt-2" style={{paddingLeft: "5px"}}>
                        <span className="fa fa-star checked"></span>   
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                    </div>
                    <p className="rating">5 / 5 stars</p>
                    <p className="card-text">
                        One of the best fries in the U-District! The staff is really
                        friendly and they're always open late, which is a plus. The mix 
                        of beef and lamb is really superior. Plus it's pretty affordable!
                    </p>
                </div>
            </div>

        </main>
    );
}

function AddReviewAndRating() {
    return(
        <div className="add-review">
            <form>
                <p>Write a review...</p>
                <div className="input-group mb-3">
                    <label htmlFor="new-review" className="input-group-text">Review:</label>
                    <textarea className="form-control" id="review-input" rows="3"></textarea>
                </div>
            </form>

            <p>Leave a rating...</p>
            <div className="input-group mb-3">
                <label htmlFor="rating-input" className="input-group-text">Rating:</label>
                <div className="stars mt-2" style={{paddingLeft: "5px"}}>
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
        <div className="reviews">
            <div className="review-1 card">
                <div className="card-body">
                    <h4 className="card-title">randomryan</h4>
                    {/* <!-- Rating --> */}
                    <div className="stars mt-2" style={{paddingLeft: "5px"}}>
                        <span className="fa fa-star checked"></span>   
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                    <p className="rating">3 / 5 stars</p>
                    <p className="card-text">
                        This one's pretty good, but I prefer the other Aladdin's location 
                        closer to the old Target. There's a difference!
                    </p>
                </div>
            </div>
            <div className="review-2 card">
                <div className="card-body">
                    <h4 className="card-title">madeupmarushka</h4>
                    {/* <!-- Rating --> */}
                    <div className="stars mt-2" style={{paddingLeft: "5px"}}>
                        <span className="fa fa-star checked"></span>   
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                    </div>
                    <p className="rating">4 / 5 stars</p>
                    <p className="card-text">
                        Love this place, and love this meal!
                    </p>
                </div>
            </div>
            <div className="review-3 card">
                <div className="card-body">
                    <h4 className="card-title">totallyrealrachel</h4>
                    {/* <!-- Rating --> */}
                    <div className="stars mt-2" style={{paddingLeft: "5px"}}>
                        <span className="fa fa-star checked"></span>   
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                    <p className="rating">3 / 5 stars</p>
                    <p className="card-text">
                        The tzaziki sauce is a little too sour for me, but the meat itself 
                        is well-seasoned! Overall pretty yummy!
                    </p>
                </div>
            </div>
   
        </div>
    );
}