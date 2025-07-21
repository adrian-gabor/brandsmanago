async function e(e,t){let a=`https://brandstestowy.smallhost.pl/api/random?pageNumber=${e}&pageSize=${t}`;try{let e=await fetch(a);if(!e.ok)throw Error(`HTTP error! status: ${e.status}`);return(await e.json()).data}catch(e){console.error("Wystąpił błąd podczas pobierania danych:",e)}}const t=document.getElementById("product-modal"),a=document.getElementById("product-modal-image"),d=document.getElementById("product-modal-close"),n=document.querySelector(".product-modal-backdrop"),o=document.getElementById("product-modal-id");async function c(d){try{let n=await e(1,d);n&&function(e){let d=document.querySelector(".products-list"),n=document.querySelector(".promo-banner");d&&(d.innerHTML="",e.forEach((e,c)=>{let s=document.createElement("li");s.classList.add("product-card"),s.innerHTML=`
            <div class="product-image-container">
                <img class="product-image" src="${e.image}" alt="${e.text}" />
                <span class="product-id">ID: ${e.id} </span>
            </div>
            `,d.appendChild(s),s.addEventListener("click",()=>{var d;a.src=(d=e).image,o.textContent=`ID: ${d.id}`,t.classList.add("open"),document.body.classList.add("modal-open")}),n&&(window.matchMedia("(min-width: 1024px)").matches&&4===c?d.appendChild(n):window.matchMedia("(max-width: 1023px)").matches&&3===c&&d.appendChild(n))}))}(n)}catch(e){console.error("Wystąpił błąd podczas pobierania produktów do listy:",e)}}function s(){t.classList.remove("open"),document.body.classList.remove("modal-open")}const r=document.getElementById("hamburger-btn"),i=document.getElementById("side-menu"),l=document.getElementById("close-menu-btn");document.addEventListener("DOMContentLoaded",async()=>{try{var a=await e(1,10);let t=document.getElementById("products-featured-list");t.innerHTML="",a.forEach(e=>{let a=document.createElement("li");a.classList.add("product-featured-card"),a.innerHTML=`
            <div class="product-featured-image-container">
                <img class="product-featured-image" src="${e.image}" alt="${e.text}" />
                <span class="product-bestseller">Bestseller</span>
                <span class="product-favorite-btn" aria-label="Dodaj do ulubionych">
                    <img class="heart-icon" src="${{}}" alt="Serduszko"/> 
                </span>
            </div>
            <div class="product-info">
                <span class="product-description">Dark blue alpine climbing jacket</span>
                <span class="product-price">\u{20AC}259,99 EUR</span> 
            </div>
        `,t.appendChild(a)}),function(){let e=document.getElementById("products-featured-list"),t=document.getElementById("next-product-btn");t&&e&&t.addEventListener("click",()=>{let t=e.querySelector(".product-featured-card"),a=parseFloat(getComputedStyle(e).gap)||0,d=t?t.offsetWidth+a:e.offsetWidth;e.scrollBy({left:d,behavior:"smooth"})})}()}catch(e){console.error("Błąd ładowania produktów do karuzeli w DOMContentLoaded:",e)}function o(){i.classList.remove("open"),document.body.classList.remove("menu-open")}r.addEventListener("click",function(){i.classList.add("open"),document.body.classList.add("menu-open")}),l.addEventListener("click",o),i.addEventListener("click",function(e){e.target.classList.contains("navigation-link")&&o()});let u=document.getElementById("products-per-page");u&&(c(parseInt(u.value,10)),u.addEventListener("change",e=>{c(parseInt(e.target.value,10))}),d&&d.addEventListener("click",s),n&&n.addEventListener("click",s),t&&document.addEventListener("keydown",e=>{"Escape"===e.key&&t.classList.contains("open")&&s()}))});
//# sourceMappingURL=brandsmanago.483fa629.js.map
