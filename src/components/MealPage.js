import React, { useState } from 'react';
import INITIAL_REVIEWS from '../data/intitialReviewsData.json';
import { useParams } from 'react-router-dom';
//import the function from the realtime database module
import { getDatabase, ref, onValue } from 'firebase/database';

import _ from 'lodash';

// returns entire meal page body
export function MealPage(props) {
    // // get a reference to the database service
    const db = getDatabase();

    // // get reference to the meal you want to look at
    const mealsRef = ref(db, "meals") // looks at all meals

    // // THIS SECTION DOESN'T WORK IDK WHAT TO DO
    // // define props
    // const initialReview = props.initialReview; 
    const currentReview = props.currentReview;


    // find url (idk if this works gahh)
    const urlParams = useParams();
    const mealNameString = urlParams.mealName; 
    
    // this might be the issue? I don't think its finding the review based on the url
    const selectedReview =  _.find(mealsRef, {"name":currentReview}); // look through meals; if key = mealNameString, then access that

    return(
        <div className="meal-body">
            {/* <!-- Description (Name, Rating, Heart, Restaurant, Location, Price) --> */}
            {/* When I try to pass in selectedReview as the prop, it doesn't seem to work */}
            <MealDescription InitialReviewData={firstAladdinsReview} AvgRating={3.75}/>

            {/* Initial Review Card */}
            <InitialReview InitialReviewData={firstAladdinsReview}/>

            {/* <!-- Add Review... --> */}
            <AddReviewAndRating />
        
            {/* <!-- Previous Reviews --> */}
            <OtherReviews Reviews={otherReviews}/>
        </div>
    );
}

// Initial Review Data/Meal Data
const firstAladdinsReview = {
    name:"Aladdin's Fries", 
    userRating:5, 
    restaurant:"Aladdin's Gyro-cery",
    address:"Aladdin Gyro-Cery & Deli, 4139 University Wy NE, Seattle, WA 98105",
    price:"$", 
    cuisine:"Mediterranean",
    username:"notkyraxo",
    img:"img/alladins-fries.png",
    reviewDesc:"One of the best fries in the U-District! The staff is really friendly and they're always open late, which is a plus. The mix of beef and lamb is really superior. Plus it's pretty affordable!"
};

// Other Reviews Data
const otherReviews = [
    // review 1
    {
        username:"randomryan",
        userRating:3,
        reviewDesc:"This one's pretty good, but I prefer the other Aladdin's location closer to the old Target. There's a difference!"
    },

    // review 2
    {
        username:"madeupmarushka",
        userRating:4,
        reviewDesc:"Love this place, and love this meal!"
    },

    // review 3
    {
        username:"totallyrealrachel",
        userRating:3,
        reviewDesc:"The tzaziki sauce is a little too sour for me, but the meat itself is well-seasoned! Overall pretty yummy!"
    }
];

// Generates meal description header; will expect a prop called InitialReviewData
function MealDescription({ InitialReviewData, AvgRating }) {
    // access props (will implement these later)
    let { name, restaurant, address, price, cuisine} = InitialReviewData;

    // call and generate star ratings here
    // let stars = StarRatings(AvgRating);

    return(
        <header>
            {/* <!-- Description (Name, Rating, Heart, Restaurant, Location, Price) --> */}
            <h1>{name}</h1> 
            <button className="favorite btn btn-light">
                <span className="material-symbols-outlined">
                heart_plus
                </span>
            </button>
            <h2>{restaurant} ({price})</h2>


            {/* Will need to replace this later with {stars} */}
            <div className="stars mt-2" style={{paddingLeft: "5px"}}>
                <span className="fa fa-star checked"></span>   
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
            </div>

            <p className="rating">{AvgRating} / 5 stars</p> 
    
            <p>{cuisine}</p>
            <p>{address}</p>
        </header>
    );
}

// Generates a star rating div depending on the given meal's rating;
// if the rating is a decimal, it will round to the nearest whole number
// NOT SURE IF THIS WORKS (does not lol)
// function StarRatings({rating}) {
//     let stars = () => {
//         for (let i = 1; i <= 5; i++) {
//             if (i <= rating) {
//                return <span className="fa fa-star checked"></span>;
//             }
//             else {
//                 return <span className="fa fa-star"></span>;
//             }
//         }
//     }

//     return(
//         <div className="stars mt-2" style="padding-left: 5px;">
//             {stars}
//         </div>
//     );
// }

// renders the actual review of the given meal
function InitialReview( {InitialReviewData} ) {
    // access props
    let { name, username, img, userRating, reviewDesc } = InitialReviewData;
    return(
        <main>          
            <div className="card">
                {/* <!-- Image of Meal --> */}
                <img id="meal-img" className="card-img-top" src={img} alt={name}></img>

                <div className="card-body">
                    {/* <!-- Initial Review --> */}
                    <h3 className="card-title">Review by: {username}</h3>
                    {/* <!-- Rating --> */}
                    <div className="stars mt-2" style={{paddingLeft: "5px"}}>
                        <span className="fa fa-star checked"></span>   
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                    </div>
                    <p className="rating">{userRating} / 5 stars</p>
                    <p className="card-text">
                        {reviewDesc}
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

// takes in array of reviews Objects and renders them
function OtherReviews( {Reviews} ) {
    // access prop
    // for each object, create a review card
    let reviewCards = Reviews.map((review => {
        return (
            <div className="review card" key={review.username}>
                <div className="card-body">
                    <h4 className="card-title">{review.username}</h4>
                    {/* <!-- Rating (not interactive yet) --> */}
                    <div className="stars mt-2" style={{paddingLeft: "5px"}}>
                        <span className="fa fa-star checked"></span>   
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                    <p className="rating">{review.userRating} / 5 stars</p>
                    <p className="card-text">
                        {review.reviewDesc}
                    </p>
                </div>
            </div>
        )
    }))

    return(
        <div className="reviews">
            {reviewCards}
        </div>
    );
}