(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const g=document.querySelector(".slide1"),h=document.querySelector(".slide2");S();let v;async function S(){try{v=(await(await fetch("https://api.github.com/users?since=0}")).json()).slice(0,10),q(v),document.querySelectorAll(".user-desc")[0].classList.add("visible")}catch(s){console.error("Error fetching users:",s)}}function q(s){s.forEach(t=>{const r=document.createElement("div");r.classList.add("slider-user");const c=document.createElement("div");c.classList.add("user-img"),c.innerHTML=`<img src="${t.avatar_url}" alt="${t.login}"> `;const e=document.createElement("p");e.classList.add("user-desc"),e.innerHTML=`<p>${t.login}</p>`,r.appendChild(c),r.appendChild(e),c.addEventListener("click",()=>{e.classList.toggle("visible")}),s.indexOf(t)<5?g.appendChild(r):h.appendChild(r)})}const n=document.querySelector(".header__offer-city"),l=document.querySelector(".background-modal"),E=document.querySelector(".header__option-change"),w=document.querySelector(".header__option-checked"),m=document.querySelector(".cities-wrapper"),i=document.body,f=document.querySelector(".header__location-city");l.addEventListener("click",()=>{l.classList.remove("visible"),n.classList.remove("visible"),i.classList.remove("modal-open")});setTimeout(()=>{n.classList.toggle("visible"),l.classList.add("visible"),i.classList.add("modal-open")},200);n.addEventListener("click",()=>{n.classList.toggle("visible"),l.classList.toggle("visible")});E.addEventListener("click",()=>{m.classList.add("visible"),i.classList.add("modal-open")});f.addEventListener("click",()=>{i.classList.add("modal-open")});m.onclick=function(s){m.classList.remove("visible"),i.classList.remove("modal-open"),f.innerHTML=s.target.innerHTML};w.addEventListener("click",()=>{n.classList.remove("visible"),l.classList.remove("visible"),i.classList.remove("modal-open"),n.style.display="none",l.style.display="none",i.classList.style.display="none"});const b=document.querySelector(".header__location-city"),u=document.querySelector(".cities-wrapper"),_=document.body;b.addEventListener("click",()=>{u.classList.add("visible")});u.onclick=function(s){u.classList.remove("visible"),_.classList.remove("modal-open"),b.innerHTML=s.target.innerHTML};const k=document.querySelector(".section-promo__button, .all-buttons"),y=document.querySelector(".modal-wrapper"),d=document.querySelector(".modal-form"),p=document.querySelector(".close-button"),T=document.querySelector(".send-promo-button-modal"),O=window.innerWidth;k.addEventListener("click",()=>{document.body.classList.add("modal-open"),d.classList.add("modal-open-form"),y.classList.add("modal-open-form"),p.classList.add("x-animation"),O<1e3?d.classList.add("modal-form-mobile"):d.classList.remove("modal-form-mobile")});p.addEventListener("click",()=>{document.body.classList.remove("modal-open"),d.classList.remove("modal-open-form"),y.classList.remove("modal-open-form"),p.classList.remove("x-animation")});T.addEventListener("click",()=>{document.body.classList.remove("modal-open"),d.classList.remove("modal-open-form"),y.classList.remove("modal-open-form")});const L=document.querySelector(".toTop-wrapper");window.addEventListener("scroll",()=>{window.scrollY>950?L.classList.add("visible"):L.classList.remove("visible")});L.addEventListener("click",()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})});