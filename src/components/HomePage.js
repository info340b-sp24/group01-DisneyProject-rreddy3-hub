document.addEventListener('DOMContentLoaded', () => {
    // Toggle favorite status on button click
    const favoriteButtons = document.querySelectorAll('.favorite');

    favoriteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const heartIcon = e.currentTarget.querySelector('.material-symbols-outlined');
            heartIcon.textContent = heartIcon.textContent === 'heart_plus' ? 'heart_minus' : 'heart_plus';
        });
    });

    // Search functionality
    const searchInput = document.querySelector('header input[type="text"]');
    const cards = document.querySelectorAll('.card');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        cards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            card.style.display = title.includes(searchTerm) ? '' : 'none';
        });
    });

    // Filter functionality
    const filters = document.querySelectorAll('header select');

    filters.forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });

    function applyFilters() {
        const priceFilter = document.querySelector('select[aria-label="price filter selection"]').value;
        const cuisineFilter = document.querySelector('select[aria-label="cuisine filter selection"]').value;
        const ratingFilter = document.querySelector('select[aria-label="rating filter selection"]').value;

        cards.forEach(card => {
            const cardPrice = card.querySelector('.card-text').textContent;
            const cardCuisine = card.querySelectorAll('.card-text')[2].textContent.replace('Cuisine: ', '');
            const cardRating = card.querySelector('.rating').textContent;

            let priceMatch = (priceFilter === 'None' || cardPrice === priceFilter);
            let cuisineMatch = (cuisineFilter === 'None' || cardCuisine === cuisineFilter);
            let ratingMatch = (ratingFilter === 'None' || cardRating.includes(ratingFilter.charAt(0)));

            card.style.display = (priceMatch && cuisineMatch && ratingMatch) ? '' : 'none';
        });
    }
});