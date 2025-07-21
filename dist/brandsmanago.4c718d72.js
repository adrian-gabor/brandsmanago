function e(e){return e&&e.__esModule?e.default:e}var t={};async function a(e,t){let a=`https://brandstestowy.smallhost.pl/api/random?pageNumber=${e}&pageSize=${t}`;try{let e=await fetch(a);if(!e.ok)throw Error(`HTTP error! status: ${e.status}`);return(await e.json()).data}catch(e){console.error("Wystąpił błąd podczas pobierania danych:",e)}}console.log("Ścieżka do ikony po przetworzeniu przez Parcel:",e(t=import.meta.resolve("9xdaw")));const n=document.getElementById("product-modal"),d=document.getElementById("product-modal-image"),o=document.getElementById("product-modal-close"),c=document.querySelector(".product-modal-backdrop"),s=document.getElementById("product-modal-id");async function r(e){try{let t=await a(1,e);t&&function(e){let t=document.querySelector(".products-list"),a=document.querySelector(".promo-banner");t&&(t.innerHTML="",e.forEach((e,o)=>{let c=document.createElement("li");c.classList.add("product-card"),c.innerHTML=`
            <div class="product-image-container">
                <img class="product-image" src="${e.image}" alt="${e.text}" />
                <span class="product-id">ID: ${e.id} </span>
            </div>
            `,t.appendChild(c),c.addEventListener("click",()=>{var t;d.src=(t=e).image,s.textContent=`ID: ${t.id}`,n.classList.add("open"),document.body.classList.add("modal-open")}),a&&(window.matchMedia("(min-width: 1024px)").matches&&4===o?t.appendChild(a):window.matchMedia("(max-width: 1023px)").matches&&3===o&&t.appendChild(a))}))}(t)}catch(e){console.error("Wystąpił błąd podczas pobierania produktów do listy:",e)}}function i(){n.classList.remove("open"),document.body.classList.remove("modal-open")}const l=document.getElementById("hamburger-btn"),u=document.getElementById("side-menu"),p=document.getElementById("close-menu-btn");document.addEventListener("DOMContentLoaded",async()=>{try{var d=await a(1,10);let n=document.getElementById("products-featured-list");n.innerHTML="",d.forEach(a=>{let d=document.createElement("li");d.classList.add("product-featured-card"),d.innerHTML=`
            <div class="product-featured-image-container">
                <img class="product-featured-image" src="${a.image}" alt="${a.text}" />
                <span class="product-bestseller">Bestseller</span>
                <span class="product-favorite-btn" aria-label="Dodaj do ulubionych">
                    <img class="heart-icon" src="${e(t)}" alt="Serduszko"/> 
                </span>
            </div>
            <div class="product-info">
                <span class="product-description">Dark blue alpine climbing jacket</span>
                <span class="product-price">\u{20AC}259,99 EUR</span> 
            </div>
        `,n.appendChild(d)}),function(){let e=document.getElementById("products-featured-list"),t=document.getElementById("next-product-btn");t&&e&&t.addEventListener("click",()=>{let t=e.querySelector(".product-featured-card"),a=parseFloat(getComputedStyle(e).gap)||0,n=t?t.offsetWidth+a:e.offsetWidth;e.scrollBy({left:n,behavior:"smooth"})})}()}catch(e){console.error("Błąd ładowania produktów do karuzeli w DOMContentLoaded:",e)}function s(){u.classList.remove("open"),document.body.classList.remove("menu-open")}l.addEventListener("click",function(){u.classList.add("open"),document.body.classList.add("menu-open")}),p.addEventListener("click",s),u.addEventListener("click",function(e){e.target.classList.contains("navigation-link")&&s()});let m=document.getElementById("products-per-page");m&&(r(parseInt(m.value,10)),m.addEventListener("change",e=>{r(parseInt(e.target.value,10))}),o&&o.addEventListener("click",i),c&&c.addEventListener("click",i),n&&document.addEventListener("keydown",e=>{"Escape"===e.key&&n.classList.contains("open")&&i()}))});
//# sourceMappingURL=brandsmanago.4c718d72.js.map
