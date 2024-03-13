(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const m of t.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const h=document.querySelector(".slide1"),S=document.querySelector(".slide2");let b;async function w(){try{b=(await(await fetch("https://api.github.com/users?since=0}")).json()).slice(0,10),q(b),document.querySelectorAll(".user-desc")[0].classList.add("visible")}catch(o){console.error("Error fetching users:",o)}}w();function q(o){o.forEach(s=>{const c=document.createElement("div");c.classList.add("slider-user");const r=document.createElement("div");r.classList.add("user-img"),r.innerHTML=`<img src="${s.avatar_url}" alt="${s.login}"> `;const e=document.createElement("p");e.classList.add("user-desc"),e.innerHTML=`<p>${s.login}</p>`,c.appendChild(r),c.appendChild(e),r.addEventListener("click",()=>{e.classList.toggle("visible")}),o.indexOf(s)<5?h.appendChild(c):S.appendChild(c)})}const n=document.querySelector(".header__offer-city"),l=document.querySelector(".background-modal"),E=document.querySelector(".header__option-change"),T=document.querySelector(".header__option-checked"),u=document.querySelector(".cities-wrapper"),i=document.body,g=document.querySelector(".header__location-city");l.addEventListener("click",()=>{l.classList.remove("visible"),n.classList.remove("visible"),i.classList.remove("modal-open")});setTimeout(()=>{n.classList.toggle("visible"),l.classList.add("visible"),i.classList.add("modal-open")},200);n.addEventListener("click",()=>{n.classList.toggle("visible"),l.classList.toggle("visible")});E.addEventListener("click",()=>{u.classList.add("visible"),i.classList.add("modal-open")});g.addEventListener("click",()=>{i.classList.add("modal-open")});u.onclick=function(o){u.classList.remove("visible"),i.classList.remove("modal-open"),g.innerHTML=o.target.innerHTML};T.addEventListener("click",()=>{n.classList.remove("visible"),l.classList.remove("visible"),i.classList.remove("modal-open"),n.style.display="none",l.style.display="none",i.classList.style.display="none"});let v=document.querySelector(".header__location-city");const p=document.querySelector(".cities-wrapper"),_=document.body;let d=localStorage.getItem("city");v.innerHTML=d??"Moscow";v.addEventListener("click",()=>{p.classList.add("visible")});p.onclick=function(o){p.classList.remove("visible"),_.classList.remove("modal-open"),d=o.target.innerHTML,localStorage.setItem("city",d),v.innerHTML=d??"Moscow",console.log(d)};const k=document.querySelector(".section-promo__button, .all-buttons"),f=document.querySelector(".modal-wrapper"),a=document.querySelector(".modal-form"),L=document.querySelector(".close-button"),M=document.querySelector(".send-promo-button-modal"),O=window.innerWidth;k.addEventListener("click",()=>{document.body.classList.add("modal-open"),a.classList.add("modal-open-form"),f.classList.add("modal-open-form"),L.classList.add("x-animation"),O<1e3?a.classList.add("modal-form-mobile"):a.classList.remove("modal-form-mobile")});L.addEventListener("click",()=>{document.body.classList.remove("modal-open"),a.classList.remove("modal-open-form"),f.classList.remove("modal-open-form"),L.classList.remove("x-animation")});M.addEventListener("click",()=>{document.body.classList.remove("modal-open"),a.classList.remove("modal-open-form"),f.classList.remove("modal-open-form")});const y=document.querySelector(".toTop-wrapper");window.addEventListener("scroll",()=>{window.scrollY>950?y.classList.add("visible"):y.classList.remove("visible")});y.addEventListener("click",()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})});
