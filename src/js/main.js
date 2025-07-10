import { displayFeaturedProducts } from './featuredProducts.js';
import { fetchProducts } from './api.js';
import { setupProductListing } from './productListing.js';
import { setupHamburgerMenu } from './hamburgerMenu.js';

const pageNumber = 1;
const pageSize = 10;

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const products = await fetchProducts(pageNumber, pageSize);
        displayFeaturedProducts(products);

    } catch (error) {
        console.error("Błąd ładowania produktów do karuzeli w DOMContentLoaded:", error);
    }
    setupHamburgerMenu();
    setupProductListing();
});