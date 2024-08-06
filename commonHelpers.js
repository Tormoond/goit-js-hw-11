import{S as d}from"./assets/vendor-4842761a.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function h(e){const s=`https://pixabay.com/api/?${new URLSearchParams({key:"44324365-be3070df1c049607fe38536c0",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(s).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).catch(o=>console.log("Error fetching photos:",o))}function m(e){return e.map(f).join("")}function f(e){return`<li class="gallery-item">
  <a href="${e.largeImageURL}" class="gallery-item-link"
    ><img
      class="gallery-item-img"
      src="${e.webformatURL}"
      alt="${e.tags}"
      width="360"
  /></a>
  <ul class="photo-info-list">
    <li class="photo-info-item">
      <p class="photo-data-name">Likes</p>
      <p class="photo-data">${e.likes}</p>
    </li>
    <li class="photo-info-item">
      <p class="photo-data-name">Views</p>
      <p class="photo-data">${e.views}</p>
    </li>
    <li class="photo-info-item">
      <p class="photo-data-name">Comments</p>
      <p class="photo-data">${e.comments}</p>
    </li>
    <li class="photo-info-item">
      <p class="photo-data-name">Downloads</p>
      <p class="photo-data">${e.downloads}</p>
    </li>
  </ul>
</li>`}const u=document.querySelector(".search-form"),l=document.querySelector(".gallery"),n=document.querySelector(".loader"),p=new d(".gallery a",{captionsData:"alt",captionDelay:350});u.addEventListener("submit",g);function g(e){e.preventDefault();const a=e.target.elements.searchField.value.trim();if(a===""){l.innerHTML="",c("You forgot enter data for search","#ffa000");return}n.classList.remove("visually-hidden"),h(a).then(s=>{if(s.hits.length===0)l.innerHTML="",c("Sorry, there are no images matching your search query. Please try again!","#EF4040");else{const o=m(s.hits);l.innerHTML=o,p.refresh()}n.classList.add("visually-hidden")}).catch(s=>{c("An error occurred while fetching photos. Please try again later.","#EF4040"),n.classList.add("visually-hidden")}),u.reset()}function c(e,a){iziToast.show({message:e,position:"topRight",backgroundColor:a,iconUrl:closeIcon,messageColor:"#fff",theme:"dark",maxWidth:"350px"})}
//# sourceMappingURL=commonHelpers.js.map
