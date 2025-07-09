async function fetchProducts() {
    const pageNumber = 1;
    const pageSize = 5;
    const apiUrl = `https://brandstestowy.smallhost.pl/api/random?pageNumber=${pageNumber}&pageSize=${pageSize}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayProducts(data.data);
    } catch (error) {
        console.error("Wystąpił błąd podczas pobierania danych:", error);
    }
}

function displayProducts(products) {
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
                    <img class="heart-icon" src="assets/FAV-FILL.svg" alt="Serduszko"/> 
                </span>
            </div>
            <div class="product-info">
                <p class="product-description">Dark blue alpine climbing jacket</p>
                <span class="product-price">€259,99 EUR</span> 
            </div>
        `;
        productsList.appendChild(productCard);
    });
    setupCarouselNavigation();
}

function setupCarouselNavigation() {
    const productsList = document.getElementById('products-featured-list');
    const nextButton = document.getElementById('next-product-btn');

    if (nextButton && productsList) {
        nextButton.addEventListener('click', () => {
            const firstCard = productsList.querySelector('.product-featured-card');
            const gap = parseInt(getComputedStyle(productsList).gap) || 0;
            const scrollAmount = firstCard ? firstCard.offsetWidth + gap : productsList.offsetWidth;

            productsList.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
    setupProductListing();
});

function setupProductListing() {
    const select = document.getElementById('products-per-page');
    if (!select) return;
    fetchProductListing(parseInt(select.value, 10));
    select.addEventListener('change', (e) => {
        fetchProductListing(parseInt(e.target.value, 10));
    });
}

async function fetchProductListing(pageSize) {
    const pageNumber = 1;
    const apiUrl = `https://brandstestowy.smallhost.pl/api/random?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayProductListing(data.data);
    } catch (error) {
        console.error("Wystąpił błąd podczas pobierania produktów:", error);
    }
}

function displayProductListing(products) {
    const productsList = document.querySelector('.products-list');
    if (!productsList) return;
    productsList.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('li');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <div class="product-image-container">
                <img class="product-image" src="${product.image}" alt="${product.text}" />
            </div>
        `;
        productsList.appendChild(productCard);
    });
}