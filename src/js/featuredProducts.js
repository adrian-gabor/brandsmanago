import heartIconPath from 'url:../assets/FAV-FILL.svg';
/**
 * Wyświetla produkty w karuzeli "Featured Products".
 * @param {Array} products - Tablica produktów do wyświetlenia w karuzeli.
 */
export function displayFeaturedProducts(products) {
    const productsList = document.getElementById('products-featured-list');

    productsList.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('li');
        productCard.classList.add('product-featured-card');
        productCard.innerHTML = `
            <div class="product-featured-image-container">
                <img class="product-featured-image" src="${product.image}" alt="${product.text}" />
                <span class="product-bestseller">Bestseller</span>
                <span class="product-favorite-btn" aria-label="Dodaj do ulubionych">
                    <img class="heart-icon" src="${heartIconPath}" alt="Serduszko"/> 
                </span>
            </div>
            <div class="product-info">
                <span class="product-description">Dark blue alpine climbing jacket</span>
                <span class="product-price">€259,99 EUR</span> 
            </div>
        `;
        productsList.appendChild(productCard);
    });
    setupCarouselNavigation();
}

/**
 * Konfiguruje nawigację karuzeli.
 */
function setupCarouselNavigation() {
    const productsList = document.getElementById('products-featured-list');
    const nextButton = document.getElementById('next-product-btn');

    if (nextButton && productsList) {
        nextButton.addEventListener('click', () => {
            const firstCard = productsList.querySelector('.product-featured-card');
            const gap = parseFloat(getComputedStyle(productsList).gap) || 0;
            const scrollAmount = firstCard ? firstCard.offsetWidth + gap : productsList.offsetWidth;

            productsList.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }
}