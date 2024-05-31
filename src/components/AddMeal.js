// sign in to add meals 
import React, { useState } from 'react';
import { getDatabase, ref, push } from "firebase/database"; 
import { useNavigate } from 'react-router-dom'; 

export function AddMeal() {
    const [meal, setMeal] = useState({
        name: '',
        restaurant: '',
        cuisine: '',
        price: '',
        rating: '',
        review: ''
    });

    let navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMeal(prevState => ({
            ...prevState,
            [name]: value                 
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const db = getDatabase();
        push(ref(db, 'meals'), meal).then(() => {
            alert("Meal added successfully!"); 
            setMeal({
                name: '',
                restaurant: '',
                cuisine: '',
                price: '', 
                rating: '',
                review: ''
            });
            navigate('/');
        }).catch(error => {
            alert("Error adding meal: " + error.message);
        });
    };

    return (
        <div>
            <header>
                <div className="header-text">
                    <h1>Add Meal</h1>
                    <p>Show others what it's like there now</p>
                </div>
            </header>

            <main>
                <section>
                    <form onSubmit={handleSubmit}>  
                        <div className="input-group mb-3">
                            <label htmlFor="name-input" className="input-group-text">Name:</label>
                            <input
                                id="name-input"
                                className="form-control"
                                type="text"
                                name="name"
                                value={meal.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="input-group mb-3">
                            <label htmlFor="restaurant-input" className="input-group-text">Restaurant:</label>
                            <input
                                id="restaurant-input"
                                className="form-control"
                                type="text"
                                name="restaurant"
                                value={meal.restaurant}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <select
                            className="form-select mb-3"
                            name="cuisine"
                            value={meal.cuisine}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled selected>Cuisine:</option>
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

                        <select
                            className="form-select mb-3"
                            name="price"
                            value={meal.price}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled selected>Price:</option>
                            <option value="$">$</option>
                            <option value="$$">$$</option>
                            <option value="$$$">$$$</option>
                            <option value="$$$$">$$$$</option>
                            <option value="$$$$$">$$$$$</option>
                        </select>

                        <select
                            className="form-select mb-3"
                            name="rating"
                            value={meal.rating}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled selected>Rating:</option>
                            <option value="1">&#9733;</option>
                            <option value="2">&#9733;&#9733;</option>
                            <option value="3">&#9733;&#9733;&#9733;</option>
                            <option value="4">&#9733;&#9733;&#9733;&#9733;</option>
                            <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
                        </select>

                        <div className="input-group mb-3">
                            <label htmlFor="review-input" className="input-group-text">Review:</label>
                            <textarea
                                className="form-control"
                                id="review-input"
                                name="review"
                                rows="3"
                                value={meal.review}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <div className="input-group mb-5">
                            <button type="button" className="btn btn-outline-primary" style={{marginTop: '0.5rem', marginLeft: '0.5rem'}} >
                                <i className="fa fa-camera" style={{paddingRight: '0.3rem'}} ></i>
                                Add a photo update
                            </button>
                        </div>

                        <div>
                            <button type="submit" className="btn btn-primary mb-10" style={{marginLeft: '0.5rem'}} >Submit</button>
                        </div>
                    </form> 
                </section>
            </main>
        </div>
    );
}




