const API_BASE_URL = 'https://brandstestowy.smallhost.pl/api/random';

/**
 * Pobiera listę produktów z API.
 * @param {number} pageNumber - Numer strony do pobrania.
 * @param {number} pageSize - Liczba produktów na stronie.
 * @returns {Promise<Array>} Tablica produktów.
 */

export async function fetchProducts(pageNumber, pageSize) {
    const apiUrl = `${API_BASE_URL}?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Wystąpił błąd podczas pobierania danych:", error);
    }
}