import { fetchProducts } from './api.js';

export function setupProductListing() {
    const select = document.getElementById('products-per-page');
    if (!select) return;
    fetchProductListing(parseInt(select.value, 10));
    select.addEventListener('change', (e) => {
        fetchProductListing(parseInt(e.target.value, 10));
    });
}

/**
 * Pobiera listę produktów do listingu z użyciem funkcji fetchProducts z api.js.
 * @param {number} pageSize - Liczba produktów na stronie.
 */
async function fetchProductListing(pageSize) {
    const pageNumber = 1;

    try {
        const products = await fetchProducts(pageNumber, pageSize);
        if (products) {
            displayProductListing(products);
        }
    } catch (error) {
        console.error("Wystąpił błąd podczas pobierania produktów do listy:", error);
    }
}

/**
 * Wyświetla produkty w sekcji listingowej.
 * @param {Array} products - Tablica produktów do wyświetlenia.
 */
function displayProductListing(products) {
    const productsList = document.querySelector('.products-list');
    const promoBanner = document.querySelector('.promo-banner');
    if (!productsList) return;
    productsList.innerHTML = '';
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

        if (promoBanner) {
            if (window.matchMedia('(min-width: 1024px)').matches && index === 4) {
                productsList.appendChild(promoBanner);
            } else if (window.matchMedia('(max-width: 1023px)').matches && index === 3) {
                productsList.appendChild(promoBanner);
            }
        }
    });
}