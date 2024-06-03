import React, { useState } from 'react';
import { getDatabase, ref, push } from "firebase/database";
import { useNavigate } from 'react-router-dom'; 
import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'; 
import { ref as sRef } from 'firebase/storage';
import { v4 } from 'uuid';

export function AddMeal() {
    const storage = getStorage();
    const [imageUpload, setImageUpload] = useState(null);
    const [imageURL, setImageURL] = useState('');
    const [meal, setMeal] = useState({
        name: '',
        restaurant: '',
        cuisine: '',
        price: '',
        rating: '',
        review: '',
        image: ''
    });

    let navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMeal(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        setImageUpload(e.target.files[0]);
    };

    const uploadImage = (callback) => {
        if (imageUpload == null) return;
        const imageRef = sRef(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageURL(url);
                callback(url);
                alert("Image Uploaded");
            })
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (imageUpload) {
            uploadImage((url) => {
                const db = getDatabase();
                push(ref(db, 'meals'), {
                    ...meal,
                    image: url
                }).then(() => {
                    alert("Meal added successfully!");
                    setMeal({
                        name: '',
                        restaurant: '',
                        cuisine: '',
                        price: '',
                        rating: '',
                        review: '',
                        image: ''
                    });
                    navigate('/');
                }).catch(error => {
                    alert("Error adding meal: " + error.message); 
                });
            });
        } else {
            alert("Please upload an image.");
        }
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
                            <option value="" disabled>Cuisine:</option>
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
                            <option value="" disabled>Price:</option>
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
                            <option value="" disabled>Rating:</option>
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

                        <div>
                            <input type="file" onChange={handleImageChange} style={{ marginTop: '0.5rem', marginLeft: '0.5rem' }} />
                            {imageURL && <img src={imageURL} alt="Uploaded" className="meal-image" />}
                        </div>

                        <div>
                            <button type="submit" className="btn btn-primary" style={{ marginTop: '1.5rem', marginLeft: '0.5rem', marginBottom: '10.2rem'}} >Submit</button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
}
