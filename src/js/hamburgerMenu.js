const hamburgerBtn = document.getElementById('hamburger-btn');
const sideMenu = document.getElementById('side-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');

/**
 * Inicjalizuje obsługę menu hamburgerowego.
 */
export function setupHamburgerMenu() {
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
        if (e.target.classList.contains('navigation-link')) {
            closeMenu();
        }
    });
}