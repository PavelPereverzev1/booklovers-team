function e(e,r,t,i){Object.defineProperty(e,r,{get:t,set:i,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=r.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var r=i[e];delete i[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){i[e]=r},r.parcelRequired7c6=n),n.register("kyEFX",function(r,t){"use strict";e(r.exports,"register",function(){return i},function(e){return i=e}),e(r.exports,"resolve",function(){return n},function(e){return n=e});var i,n,a={};i=function(e){for(var r=Object.keys(e),t=0;t<r.length;t++)a[r[t]]=e[r[t]]},n=function(e){var r=a[e];if(null==r)throw Error("Could not resolve bundle with id "+e);return r}}),n("kyEFX").register(JSON.parse('{"5ZPII":"index.1e5ffe8f.js","3Sqhv":"children.02e360f0.webp","hS5yG":"children@2x.8a8a1393.webp","jSU4a":"hope.65bd87f9.webp","55RGc":"hope@2x.912cf72c.webp","eSl1N":"united.c46ae387.webp","3lbDK":"united@2x.7edd5c8b.webp","5a3FP":"med-corps.f2077b9a.webp","gHqor":"med-corps@2x.3a845a76.webp","iX0sD":"frontieres.a8475b89.webp","huRUk":"frontieres@2x.04bfff31.webp","l3khe":"razom.3a5ccf3b.webp","6dF1T":"razom@2x.dd36c933.webp","kqHhj":"hunger.98f3c460.webp","kORGK":"hunger@2x.7b8ec5d1.webp","oaToZ":"vision.968858b2.webp","dG0Jk":"vision@2x.ee540a55.webp","iitMp":"prytula.f0805ebd.webp","kPDRK":"prytula@2x.9631e293.webp"}'));var a={};a=new URL(n("kyEFX").resolve("3Sqhv"),import.meta.url).toString();var o={};o=new URL(n("kyEFX").resolve("hS5yG"),import.meta.url).toString();var l={};l=new URL(n("kyEFX").resolve("jSU4a"),import.meta.url).toString();var s={};s=new URL(n("kyEFX").resolve("55RGc"),import.meta.url).toString();var u={};u=new URL(n("kyEFX").resolve("eSl1N"),import.meta.url).toString();var g={};g=new URL(n("kyEFX").resolve("3lbDK"),import.meta.url).toString();var w={};w=new URL(n("kyEFX").resolve("5a3FP"),import.meta.url).toString();var d={};d=new URL(n("kyEFX").resolve("gHqor"),import.meta.url).toString();var m={};m=new URL(n("kyEFX").resolve("iX0sD"),import.meta.url).toString();var c={};c=new URL(n("kyEFX").resolve("huRUk"),import.meta.url).toString();var p={};p=new URL(n("kyEFX").resolve("l3khe"),import.meta.url).toString();var R={};R=new URL(n("kyEFX").resolve("6dF1T"),import.meta.url).toString();var U={};U=new URL(n("kyEFX").resolve("kqHhj"),import.meta.url).toString();var v={};v=new URL(n("kyEFX").resolve("kORGK"),import.meta.url).toString();var f={};f=new URL(n("kyEFX").resolve("oaToZ"),import.meta.url).toString();var b={};b=new URL(n("kyEFX").resolve("dG0Jk"),import.meta.url).toString();var S={};S=new URL(n("kyEFX").resolve("iitMp"),import.meta.url).toString();var _={};_=new URL(n("kyEFX").resolve("kPDRK"),import.meta.url).toString();const F=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:{imageUrl:new URL(a),retinaImageUrl:new URL(o)}},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:{imageUrl:new URL(l),retinaImageUrl:new URL(s)}},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:{imageUrl:new URL(u),retinaImageUrl:new URL(g)}},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:{imageUrl:new URL(w),retinaImageUrl:new URL(d)}},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:{imageUrl:new URL(m),retinaImageUrl:new URL(c)}},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:{imageUrl:new URL(p),retinaImageUrl:new URL(R)}},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:{imageUrl:new URL(U),retinaImageUrl:new URL(v)}},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:{imageUrl:new URL(f),retinaImageUrl:new URL(b)}},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:{imageUrl:new URL(S),retinaImageUrl:new URL(_)}}];console.log("test");const h=document.querySelector(".swiper-wrapper"),E=F.map(function(e,r){return`<div class="swiper-slide">
    <div class="slide__content">
      <div class="slide__number">${(r+1).toString().padStart(2,"0")}</div>
      <a href="${e.url}" class="slider__link" target="blank">
        <img srcset="${e.img.imageUrl.href}, ${e.img.retinaImageUrl.href} 2x" 
        src="${e.img.imageUrl.href}"
        alt="${e.title}" 
        class="slider__png">
      </a>
    </div>
  </div>`}).join("");h.insertAdjacentHTML("beforeend",E);
//# sourceMappingURL=index.1e5ffe8f.js.map
