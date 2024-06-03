import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function FavoritesList(props) {
    // see reviews pop up
    const [show, setShow] = useState(false);
    const [currentMeal, setCurrentMeal] = useState(null);
 
    const handleClose = () => setShow(false);
    const handleShow = (meal) => {
        setCurrentMeal(meal);
        setShow(true);
    };

    const renderRating = (meal) => {
        const rating = meal.userRating ? parseFloat(meal.userRating) : parseFloat(meal.rating);
        return rating;
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

    const handleRemoveFromFavorites = (index) => {
        const updatedFavorites = props.favorites.filter((_, i) => i !== index);
        props.setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
        if (storedFavorites) {
            props.setFavorites(storedFavorites);
        }
    }, []);

    return (
        <div>
            <header>
                <div className="header-text">
                    <h1>Favorites</h1>
                    <p>Enjoy your favorite meal</p>
                </div>
            </header>
            <main>
                <div className="container">
                    <div className="row">
                        {props.favorites.map((meal, index) => (
                            <div className="card-container col-md-auto col-xl-4" key={index}>
                                <div className="homepage-card card m-3" style={{ width: "25rem" }}>
                                <img src={meal.image} className="card-img-top meal-image" alt={meal.name} />
                                    <div className="card-body">
                                        <h2 className="card-title">{meal.name}, {meal.restaurant}</h2>
                                        <Button variant="info" onClick={() => handleShow(meal)}>
                                           Show Review
                                        </Button>
                                        <div className="stars">
                                            {renderStars(renderRating(meal))}
                                        </div>
                                        <p className="card-text rating">{renderRating(meal)} / 5 stars</p>
                                        <p className="card-text">{meal.price}</p>
                                        <p className="card-text">Cuisine: {meal.cuisine}</p>
                                        <button className="btn btn-primary btn-sm" onClick={() => handleRemoveFromFavorites(index)}>
                                            Remove from Favorites
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            
            {currentMeal && (
               <Modal show={show} onHide={handleClose}>
                   <Modal.Header closeButton>
                       <Modal.Title>{currentMeal.name} Review</Modal.Title>
                   </Modal.Header>
                   <Modal.Body>{currentMeal.review}</Modal.Body>
                   <Modal.Footer>
                       <Button variant="primary" onClick={handleClose}>
                           Close
                       </Button> 
                   </Modal.Footer>
               </Modal>
           )}
        </div>
    );
} 
