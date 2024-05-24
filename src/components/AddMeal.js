import React, { useState } from 'react';

export function AddMeal() {

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
                    <form>

                        <div className="input-group mb-3">
                            <label htmlFor="name-input" className="input-group-text">Name:</label>
                            <input id="name-input" className="form-control" type="text" name="mealname" />
                        </div>

                        <div className="input-group mb-3">
                            <label htmlFor="restaurant-input" className="input-group-text">Restaurant:</label>
                            <input id="restaurant-input" className="form-control" type="text" name="mealrestaurant" />
                        </div>

                        <select className="form-select mb-3" aria-label="Select Cuisine">
                            <option selected>Cuisine:</option>
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

                        <select className="form-select mb-3" aria-label="Select Price">
                            <option selected>Price:</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>

                        {/* <div className="input-group mb-3">
                            <label htmlFor="address-input" className="input-group-text">Address:</label>
                            <input id="address-input" className="form-control" type="text" name="mealaddress" placeholder="1234 Main St"
                                aria-describedby="passwordHelpBlock" />
                            <div id="passwordHelpBlock" className="form-text" style={{ marginLeft: '7px' }}>
                                Can't be outside of U-district.
                            </div>
                        </div> */}

                        <select className="form-select mb-3" aria-label="Select Rating">
                            <option selected>Rating:</option> 
                            <option value="1">&#9733;</option>
                            <option value="2">&#9733;&#9733;</option>
                            <option value="3">&#9733;&#9733;&#9733;</option>
                            <option value="4">&#9733;&#9733;&#9733;&#9733;</option>
                            <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
                        </select>

                        {/* <div className="input-group mb-3">
                            <label htmlFor="rating-input" className="input-group-text">Rating:</label> */}
                            {/* <div className="stars mt-2" style={{ paddingLeft: '5px' }}>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star notchecked"></span>
                            </div> */}
                            {/* <option value="1">&#9733;</option>
                            <option value="2">&#9733;&#9733;</option>
                            <option value="3">&#9733;&#9733;&#9733;</option>
                            <option value="4">&#9733;&#9733;&#9733;&#9733;</option>
                            <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
                        </div> */}

                        <div className="input-group mb-3">
                            <label htmlFor="review-input" className="input-group-text">Review:</label>
                            <textarea className="form-control" id="review-input" rows="3"></textarea>
                        </div>

                        <div className="input-group mb-5">
                            <button type="button" className="btn btn-outline-primary">
                                <i className="fa fa-camera"></i>
                                Add a photo update
                            </button>
                        </div>

                        <div>
                            <button type="submit" className="btn btn-primary mb-3">Submit</button>
                        </div>

                    </form>
                </section>
            </main>
        </div>
    )
}






