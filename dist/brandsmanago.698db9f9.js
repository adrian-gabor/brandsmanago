const e=new URL(import.meta.resolve("9X2rF")).href;async function t(e,t){let a=`https://brandstestowy.smallhost.pl/api/random?pageNumber=${e}&pageSize=${t}`;try{let e=await fetch(a);if(!e.ok)throw Error(`HTTP error! status: ${e.status}`);return(await e.json()).data}catch(e){console.error("Wystąpił błąd podczas pobierania danych:",e)}}const a=document.getElementById("product-modal"),n=document.getElementById("product-modal-image"),d=document.getElementById("product-modal-close"),o=document.querySelector(".product-modal-backdrop"),c=document.getElementById("product-modal-id");async function s(e){try{let d=await t(1,e);d&&function(e){let t=document.querySelector(".products-list"),d=document.querySelector(".promo-banner");t&&(t.innerHTML="",e.forEach((e,o)=>{let s=document.createElement("li");s.classList.add("product-card"),s.innerHTML=`
            <div class="product-image-container">
                <img class="product-image" src="${e.image}" alt="${e.text}" />
                <span class="product-id">ID: ${e.id} </span>
            </div>
            `,t.appendChild(s),s.addEventListener("click",()=>{var t;n.src=(t=e).image,c.textContent=`ID: ${t.id}`,a.classList.add("open"),document.body.classList.add("modal-open")}),d&&(window.matchMedia("(min-width: 1024px)").matches&&4===o?t.appendChild(d):window.matchMedia("(max-width: 1023px)").matches&&3===o&&t.appendChild(d))}))}(d)}catch(e){console.error("Wystąpił błąd podczas pobierania produktów do listy:",e)}}function r(){a.classList.remove("open"),document.body.classList.remove("modal-open")}const i=document.getElementById("hamburger-btn"),l=document.getElementById("side-menu"),u=document.getElementById("close-menu-btn");document.addEventListener("DOMContentLoaded",async()=>{try{var n=await t(1,10);let a=document.getElementById("products-featured-list");a.innerHTML="",n.forEach(t=>{let n=document.createElement("li");n.classList.add("product-featured-card"),n.innerHTML=`
            <div class="product-featured-image-container">
                <img class="product-featured-image" src="${t.image}" alt="${t.text}" />
                <span class="product-bestseller">Bestseller</span>
                <span class="product-favorite-btn" aria-label="Dodaj do ulubionych">
                    <img class="heart-icon" src="${e}" alt="Serduszko"/> 
                </span>
            </div>
            <div class="product-info">
                <span class="product-description">Dark blue alpine climbing jacket</span>
                <span class="product-price">\u{20AC}259,99 EUR</span> 
            </div>
        `,a.appendChild(n)}),function(){let e=document.getElementById("products-featured-list"),t=document.getElementById("next-product-btn");t&&e&&t.addEventListener("click",()=>{let t=e.querySelector(".product-featured-card"),a=parseFloat(getComputedStyle(e).gap)||0,n=t?t.offsetWidth+a:e.offsetWidth;e.scrollBy({left:n,behavior:"smooth"})})}()}catch(e){console.error("Błąd ładowania produktów do karuzeli w DOMContentLoaded:",e)}function c(){l.classList.remove("open"),document.body.classList.remove("menu-open")}i.addEventListener("click",function(){l.classList.add("open"),document.body.classList.add("menu-open")}),u.addEventListener("click",c),l.addEventListener("click",function(e){e.target.classList.contains("navigation-link")&&c()});let p=document.getElementById("products-per-page");p&&(s(parseInt(p.value,10)),p.addEventListener("change",e=>{s(parseInt(e.target.value,10))}),d&&d.addEventListener("click",r),o&&o.addEventListener("click",r),a&&document.addEventListener("keydown",e=>{"Escape"===e.key&&a.classList.contains("open")&&r()}))});
//# sourceMappingURL=brandsmanago.698db9f9.js.map
