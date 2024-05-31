// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

// export function FavoritesList(props) {
//     const [notes, setNotes] = useState(() => {
//         const storedNotes = JSON.parse(localStorage.getItem('mealNotes'));
//         return storedNotes || {};
//     });

//     useEffect(() => {
//         localStorage.setItem('mealNotes', JSON.stringify(notes));
//     }, [notes]);

//     const handleNoteChange = (mealId, value) => {
//         setNotes(prevNotes => ({
//             ...prevNotes,
//             [mealId]: value
//         }));
//     };

//     return (
//         <div>
//             <header>
//                 <div className="header-text">
//                     <h1>Favorites List</h1>
//                 </div>
//             </header>
//             <main>
//                 <div className="container">
//                     <div className="row">
//                         <MealCard
//                             image="./img/alladins-fries.png"
//                             title="Aladdin's Fries, Aladdin's"
//                             rating="3.75 / 5 stars"
//                             price="$"
//                             cuisine="Mediterranean"
//                             mealId="meal1"
//                             note={notes['meal1'] || ''}
//                             handleNoteChange={handleNoteChange}
//                         />
//                         <MealCard
//                             image="./img/pho-shizzle.png"
//                             title="Beef Pho, Pho Shizzle" 
//                             rating="5 / 5 stars"
//                             price="$"
//                             cuisine="Vietnamese"
//                             mealId="meal2"
//                             note={notes['meal2'] || ''}
//                             handleNoteChange={handleNoteChange}
//                         />
//                         <MealCard
//                             image="./img/sizzle-and-crunch.png"
//                             title="Banh Mi Bowl, Sizzle and Crunch"
//                             rating="5 / 5 stars" 
//                             price="$"
//                             cuisine="Vietnamese"
//                             mealId="meal3"
//                             note={notes['meal3'] || ''}
//                             handleNoteChange={handleNoteChange}
//                         />
//                         <MealCard
//                             image="./img/dont-yell-at-me.png"
//                             title="Traditional Milk Tea, Don't Yell At Me"
//                             rating="5 / 5 stars"
//                             price="$$"
//                             cuisine="Boba"
//                             mealId="meal4"
//                             note={notes['meal4'] || ''}
//                             handleNoteChange={handleNoteChange}
//                         />
//                     </div>
//                 </div>
//             </main>
//             <footer>
//                 <p>&copy; Julie Noh, Kyra Diaz, Tina Song, & Rishita Reddy & INFO 340</p>
//             </footer>
//         </div>
//     );
// }

// function MealCard({ image, title, rating, price, cuisine, mealId, note, handleNoteChange }) {
//     const [localNote, setLocalNote] = useState(note || '');
//     const [editMode, setEditMode] = useState(!note); // Initially set to true if there's no note

//     const handleChange = (event) => {
//         const { value } = event.target;
//         setLocalNote(value);
//     };

//     const handleSubmit = () => {
//         handleNoteChange(mealId, localNote);
//         setEditMode(false); // After submitting, disable edit mode
//     };

//     const handleEdit = () => {
//         setEditMode(true); // Enable edit mode when clicking on the note
//     };

//     return (
//         <div className="col-md-4">
//             <div className="card mb-3" style={{ width: '25rem' }}>
//                 <img src={image} alt={title} className="card-img-top pb-3" />
//                 <div className="card-body">
//                     <h5 className="favorite-title">{title}</h5>
//                     <p className="reviews-link">See reviews</p>
//                     <div className="stars mt-2" style={{ paddingLeft: '5px' }}>
//                         <span className="fa fa-star checked"></span>
//                         <span className="fa fa-star checked"></span>
//                         <span className="fa fa-star checked"></span>
//                         <span className="fa fa-star"></span>
//                         <span className="fa fa-star"></span>
//                     </div>
//                     <p className="rating">{rating}</p>
//                     <p className="price">{price}</p>
//                     <p className="cuisine">Cuisine: {cuisine}</p>
//                     {editMode ? (
//                         <textarea
//                             className="form-control"
//                             placeholder="Add a note..."
//                             value={localNote}
//                             onChange={handleChange}
//                         />
//                     ) : (
//                         <div onClick={handleEdit} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
//                             {localNote ? localNote : <span style={{ fontStyle: 'italic', color: '#adb5bd' }}>Click here to add a memo...</span>}
//                             <FontAwesomeIcon icon={faPencilAlt} style={{ marginLeft: '5px' }} />
//                         </div>
//                     )}
//                     {editMode && (
//                         <button type="button" className="btn btn-primary" onClick={handleSubmit}>
//                             Add note
//                         </button>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useEffect } from 'react';

export function FavoritesList(props) {

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
                            <div className="col-md-4" key={index}>
                                <div className="card mb-3" style={{ width: "25rem" }}>
                                    <div className="card-body">
                                        <h2 className="card-title">{meal.name}, {meal.restaurant}</h2>
                                        <button className="reviews-link btn" value={meal.name}>See reviews</button>
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
        </div>
    );
} 
