import React from 'react';
// import './style.css';

export function FavoritesList(props) {
    return (
        <div>
            <nav>
                <div id="hamburger-menu">
                    <a href="#"><i className="fa fa-bars" aria-label="menu"></i></a>
                </div>
                <div className="laptop-nav">
                    <a href="index.html"><span className="material-icons" aria-label="Home">home</span></a>
                    <button type="button" className="btn btn-light" aria-labelledby="add meal form">
                        <a href="add-meal.html">Add Meal</a>
                    </button>
                </div>
            </nav>
            <header>
                <div className="header-text">
                    <h1>UW Crave</h1>
                    <input type="text" placeholder="Search..." />
                    <div>
                        <label htmlFor="Price">Price:</label>
                        <select name="cars" id="cars" aria-label="price filter selection">
                            <option value="None">Select price...</option>
                            <option value="$">$</option>
                            <option value="$$">$$</option>
                            <option value="$$$">$$$</option>
                            <option value="$$$$">$$$$</option>
                        </select>

                        <label htmlFor="Cuisine">Cuisine:</label>
                        <select name="cars" id="cars" aria-label="cuisine filter selection">
                            <option value="None">Select cuisine...</option>
                            <option value="Mediterranean">Mediterranean</option>
                            <option value="Thai">Thai</option>
                            <option value="Korean">Korean</option>
                            <option value="Mexican">Mexican</option>
                            <option value="Vietnamese">Vietnamese</option>
                            <option value="Indian">Indian</option>
                            <option value="Boba">Boba</option>
                        </select>

                        <label htmlFor="Rating">Rating:</label>
                        <select name="cars" id="cars" aria-label="rating filter selection">
                            <option value="None">Select rating...</option>
                            <option value="1 star">&#9733;</option>
                            <option value="2 stars">&#9733;&#9733;</option>
                            <option value="3 stars">&#9733;&#9733;&#9733;</option>
                            <option value="4 stars">&#9733;&#9733;&#9733;&#9733;</option>
                            <option value="5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
                        </select>
                    </div>
                </div>
            </header>
            <main>
                <div className="container">
                    <div className="row">
                        <MealCard image="./img/alladins-fries.png" title="Aladdin's Fries, Aladdin's" rating="3.75 / 5 stars" price="$" cuisine="Mediterranean" />
                        <MealCard image="./img/pho-shizzle.png" title="Beef Pho, Pho Shizzle" rating="5 / 5 stars" price="$" cuisine="Vietnamese" />
                        <MealCard image="./img/sizzle-and-crunch.png" title="Banh Mi Bowl, Sizzle and Crunch" rating="5 / 5 stars" price="$" cuisine="Vietnamese" />
                        <MealCard image="./img/dont-yell-at-me.png" title="Traditional Milk Tea, Don't Yell At Me" rating="5 / 5 stars" price="$$" cuisine="Boba" />
                    </div>
                </div>
            </main>
            <footer>
                <p>&copy; Julie Noh, Kyra Diaz, Tina Song, & Rishita Reddy & INFO 340</p>
            </footer>
        </div>
    );
}

function MealCard ({ image, title, rating, price, cuisine }) {
    return (
        <div className="col-md-4">
            <div className="card mb-3" style={{ width: '15rem' }}>
                <img src={image} alt={title} className="card-img-top pb-3" />
                <div className="card-body">
                    <h5 className="favorite-title">{title}</h5>
                    <p className="reviews-link">See reviews</p>
                    <div className="stars mt-2" style={{ paddingLeft: '5px' }}>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                    <p className="rating">{rating}</p>
                    <p className="price">{price}</p>
                    <p className="cuisine">Cuisine: {cuisine}</p>
                    <button type="button" className="btn btn-light">
                        <a href="favorites-list.html">Remove</a>
                    </button>
                </div>
            </div>
        </div>
    );
}