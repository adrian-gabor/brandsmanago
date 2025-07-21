async function e(e,t){let d=`https://brandstestowy.smallhost.pl/api/random?pageNumber=${e}&pageSize=${t}`;try{let e=await fetch(d);if(!e.ok)throw Error(`HTTP error! status: ${e.status}`);return(await e.json()).data}catch(e){console.error("Wystąpił błąd podczas pobierania danych:",e)}}const t=document.getElementById("product-modal"),d=document.getElementById("product-modal-image"),a=document.getElementById("product-modal-close"),n=document.querySelector(".product-modal-backdrop"),o=document.getElementById("product-modal-id");async function c(a){try{let n=await e(1,a);n&&function(e){let a=document.querySelector(".products-list"),n=document.querySelector(".promo-banner");a&&(a.innerHTML="",e.forEach((e,c)=>{let s=document.createElement("li");s.classList.add("product-card"),s.innerHTML=`
            <div class="product-image-container">
                <img class="product-image" src="${e.image}" alt="${e.text}" />
                <span class="product-id">ID: ${e.id} </span>
            </div>
            `,a.appendChild(s),s.addEventListener("click",()=>{var a;d.src=(a=e).image,o.textContent=`ID: ${a.id}`,t.classList.add("open"),document.body.classList.add("modal-open")}),n&&(window.matchMedia("(min-width: 1024px)").matches&&4===c?a.appendChild(n):window.matchMedia("(max-width: 1023px)").matches&&3===c&&a.appendChild(n))}))}(n)}catch(e){console.error("Wystąpił błąd podczas pobierania produktów do listy:",e)}}function s(){t.classList.remove("open"),document.body.classList.remove("modal-open")}const r=document.getElementById("hamburger-btn"),i=document.getElementById("side-menu"),l=document.getElementById("close-menu-btn");document.addEventListener("DOMContentLoaded",async()=>{try{var d=await e(1,10);let t=document.getElementById("products-featured-list");t.innerHTML="",d.forEach(e=>{let d=document.createElement("li");d.classList.add("product-featured-card"),d.innerHTML=`
            <div class="product-featured-image-container">
                <img class="product-featured-image" src="${e.image}" alt="${e.text}" />
                <span class="product-bestseller">Bestseller</span>
                <span class="product-favorite-btn" aria-label="Dodaj do ulubionych">
                </span>
            </div>
            <div class="product-info">
                <span class="product-description">Dark blue alpine climbing jacket</span>
                <span class="product-price">\u{20AC}259,99 EUR</span> 
            </div>
        `,t.appendChild(d)}),function(){let e=document.getElementById("products-featured-list"),t=document.getElementById("next-product-btn");t&&e&&t.addEventListener("click",()=>{let t=e.querySelector(".product-featured-card"),d=parseFloat(getComputedStyle(e).gap)||0,a=t?t.offsetWidth+d:e.offsetWidth;e.scrollBy({left:a,behavior:"smooth"})})}()}catch(e){console.error("Błąd ładowania produktów do karuzeli w DOMContentLoaded:",e)}function o(){i.classList.remove("open"),document.body.classList.remove("menu-open")}r.addEventListener("click",function(){i.classList.add("open"),document.body.classList.add("menu-open")}),l.addEventListener("click",o),i.addEventListener("click",function(e){e.target.classList.contains("navigation-link")&&o()});let u=document.getElementById("products-per-page");u&&(c(parseInt(u.value,10)),u.addEventListener("change",e=>{c(parseInt(e.target.value,10))}),a&&a.addEventListener("click",s),n&&n.addEventListener("click",s),t&&document.addEventListener("keydown",e=>{"Escape"===e.key&&t.classList.contains("open")&&s()}))});
//# sourceMappingURL=brandsmanago.c9771d0e.js.map
