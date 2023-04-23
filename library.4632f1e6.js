function e(e,n,t,i){Object.defineProperty(e,n,{get:t,set:i,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},s=n.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var s={id:e,exports:{}};return t[e]=s,n.call(s.exports,s,s.exports),s.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){i[e]=n},n.parcelRequired7c6=s),s.register("kyEFX",(function(n,t){var i,s;e(n.exports,"register",(function(){return i}),(function(e){return i=e})),e(n.exports,"resolve",(function(){return s}),(function(e){return s=e}));var l={};i=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)l[n[t]]=e[n[t]]},s=function(e){var n=l[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),s.register("6VKYe",(function(n,t){e(n.exports,"refs",(function(){return c}));var i=s("2shzp"),l=(i=s("2shzp"),s("ezyJp"));const a=new URL(s("ktfcO")),o=new URL(s("gSToZ")),r="https://image.tmdb.org/t/p/original/",c={queueBtn:document.querySelector(".button-queue"),watchedBtn:document.querySelector(".button-watched"),librarylist:document.querySelector(".library-list"),libraryBox:document.querySelector(".empty-wrapp")};function d(){c.watchedBtn.classList.add("active"),c.queueBtn.classList.remove("active");let e=JSON.parse(localStorage.getItem("addToWatched"))||[];const n=e.reduce(((e,n)=>(e.find((({id:e})=>n.id==e))||e.push(n),e)),[]);if(console.log(n),!e.length)return console.log("no movie"),void(c.librarylist.innerHTML=`<div onclick="event.stopPropagation()" class="empty-wrapp">\n      <p class="empty-text">\n        No movies added. Select a movie on the\n        <a class="alert-link" href="./index.html">Home</a> page\n      </p>\n      <img class="film-img empty-img" src="${o}" alt="hands"/>\n    </div>\n    `);c.librarylist.innerHTML="",console.log("savedFilm:",e),m(n)}function u(){c.queueBtn.classList.add("active"),c.watchedBtn.classList.remove("active");const e=JSON.parse(localStorage.getItem("addToQueue"))||[],n=e.reduce(((e,n)=>(e.find((({id:e})=>n.id==e))||e.push(n),e)),[]);if(!e.length)return console.log("no movie"),void(c.librarylist.innerHTML=`<div onclick="event.stopPropagation()" class="empty-wrapp">\n      <p class="empty-text">\n        No movies added. Select a movie on the\n        <a class="alert-link" href="./index.html">Home</a> page\n      </p>\n      <img class="film-img empty-img" src="${o}" alt="" />\n    </div>\n    `);c.librarylist.innerHTML="",console.log("savedFilm:",e),m(n)}function m(e){const n=e.map((e=>`<li class="film-card" data-id="${e.id}">\n          <picture class="film-card__img">\n          ${e.poster?`<source\n              srcset="${r}${e.poster}"\n              loading="lazy"\n              media="(min-width: 1280px)"\n            />\n            <source\n              srcset="${r}${e.poster}"\n              loading="lazy"\n              media="(min-width: 768px)"\n            />\n            <source\n              srcset="${r}${e.poster}"\n              loading="lazy"\n              media="(min-width: 320px)"\n            />\n            <img\n              class="film-card__img film-img"\n              src="${r}${e.poster}"\n              alt="Poster for the film"\n              width="395"\n            />`:`            <source\n              srcset="${a}"\n              loading="lazy"\n              media="(min-width: 1280px)"\n            />\n            <source\n              srcset="${a}"\n              loading="lazy"\n              media="(min-width: 768px)"\n            />\n            <source\n              srcset="${a}"\n              loading="lazy"\n              media="(min-width: 320px)"\n            />\n            <img\n              class="film-card__img film-img"\n              src="${a}"\n              alt="Poster for the film"\n              width="395"\n            />`}\n\n          </picture>\n          <h3 class="film-card__title">${e.title}</h3>\n          <div class="film-card_info-container">\n            <div class="film-card__caption">\n              <p class="film-card__genre">${e.genres}</p>\n              <p class="film-card__date">${e.releaseDate}</p>\n            </div>\n          </div>\n      </li>`)).join("");return c.librarylist.innerHTML=n,n}u(),d(),c.watchedBtn.addEventListener("click",d),c.queueBtn.addEventListener("click",u);const p=document.querySelector(".backdrop");document.querySelector(".library-list").addEventListener("click",(function(e){if(e.preventDefault(),e.currentTarget===e.target)return;const n=e.target.closest("li"),t=(null==n?void 0:n.dataset.id)||{};p.classList.remove("visually-hidden");(async()=>{const{data:e}=await i.default.get(`https://api.themoviedb.org/3/movie/${t}?api_key=9e4f0ad78cbe1148a9d4c0c8389afc83&language=en-US`);return e})().then((e=>{!function(e){f.innerHTML="";const{backdrop_path:n,id:t,genres:i,original_title:s,popularity:a,poster_path:o,overview:c,title:d,vote_average:u,vote_count:m}=e,p=[];for(const e of i)p.push(e.id);const g=(0,l.getGenres)(p),v=`\n  \n    <button type="button" class="modal-close" data-modal-close>\n     <svg\n      width="30"\n      height="30"\n      viewBox="0 0 30 30"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg">\n      <path d="M8 8L22 22" stroke="black" stroke-width="2" />\n      <path d="M8 22L22 8" stroke="black" stroke-width="2" />\n    </svg>\n   </button>\n   <div class="modal-poster"><img\n       class="img-film"\n       src="${r}${o}"\n       alt=""\n     />\n   </div>\n   <div class="modal-description">\n     <h2 class="modal-title">${d}</h2>\n     <div class="data-wrapper">\n       <div class="data-keys">\n         <ul class="keys-list">\n           <li class="keys-item">Vote / Votes</li>\n           <li class="keys-item">Popularity</li>\n           <li class="keys-item">Original Title</li>\n           <li class="keys-item">Genre</li>\n         </ul>\n       </div>\n       <div class="data-values">\n         <ul class="values-list">\n           <li class="value-item">\n             <span class="rating">${u}</span>/<span class="votes">${m}</span>\n           </li>\n           <li class="value-item popularity">${a}</li>\n           <li class="value-item movie-title">${s}</li>\n           <li class="value-item movie-genres">${g}</li>\n         </ul>\n       </div>\n     </div>\n     <h2 class="about-film">ABOUT</h2>\n     <p class="description-film-info">${c} \n     </p>\n     <div class="btn-block">\n       <button type="button" class="modal-button js-watchedBtn">ADD TO WATCHED</button>\n       <button type="button" class="modal-button js-queueBtn">ADD TO QUEUE</button>\n     </div>\n   </div>`;f.insertAdjacentHTML("beforeend",v)}(e)})).catch((e=>console.log(e)))}));const f=document.querySelector(".modal")})),s.register("ktfcO",(function(e,n){e.exports=new URL(s("kyEFX").resolve("2cWLi"),import.meta.url).toString()})),s.register("gSToZ",(function(e,n){e.exports=new URL(s("kyEFX").resolve("6Y9A4"),import.meta.url).toString()})),s("kyEFX").register(JSON.parse('{"axnmq":"library.4632f1e6.js","2cWLi":"no-foto.3ad49d40.jpg","6Y9A4":"movie-time.6a8d447c.jpg","7NfoW":"library.a787baa4.js"}')),s("6VKYe");
//# sourceMappingURL=library.4632f1e6.js.map
