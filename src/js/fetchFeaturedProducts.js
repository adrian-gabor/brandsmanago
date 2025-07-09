async function fetchProducts() {
    const pageNumber = 1;
    const pageSize = 10;
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
                <span class="product-description">Dark blue alpine climbing jacket</span>
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
    const promoBanner = document.querySelector('.promo-banner');
    if (!productsList) return;
    productsList.innerHTML = '';
    const productsPerBeforeBanner = 4;
    products.forEach((product, index) => {
        const productCard = document.createElement('li');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <div class="product-image-container">
                <img class="product-image" src="${product.image}" alt="${product.text}" />
                <span class="product-id">ID: ${product.id} </span>
            </div>
        `;
        productsList.appendChild(productCard);

        if (promoBanner && (index + 1) === productsPerBeforeBanner) {
            productsList.insertBefore(promoBanner, productCard.nextElementSibling);
        }
    });
}


const hamburgerBtn = document.getElementById('hamburger-btn');
const sideMenu = document.getElementById('side-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');

function openMenu() {
    sideMenu.classList.add('open');
    document.body.classList.add('menu-open');
}
function closeMenu() {
    sideMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
}
hamburgerBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);
sideMenu.addEventListener('click', function (e) {
    if (e.target.classList.contains('navigation-link')) closeMenu();
});