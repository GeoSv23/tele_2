(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))L(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&L(l)}).observe(document,{childList:!0,subtree:!0});function y(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function L(e){if(e.ep)return;e.ep=!0;const o=y(e);fetch(e.href,o)}})();const c=document.querySelector(".header__offer-city"),i=document.querySelector(".background-modal"),b=document.querySelector(".header__option-change"),d=document.querySelector(".cities-wrapper"),r=document.body,f=document.querySelector(".header__location-city");i.addEventListener("click",()=>{i.classList.remove("visible"),c.classList.remove("visible"),r.classList.remove("modal-open")});setTimeout(()=>{c.classList.toggle("visible"),i.classList.add("visible"),r.classList.add("modal-open")},200);c.addEventListener("click",()=>{c.classList.toggle("visible"),i.classList.toggle("visible")});b.addEventListener("click",()=>{d.classList.add("visible"),r.classList.add("modal-open")});f.addEventListener("click",()=>{r.classList.add("modal-open")});d.onclick=function(t){d.classList.remove("visible"),r.classList.remove("modal-open"),f.innerHTML=t.target.innerHTML};const v=document.querySelector(".header__location-city"),a=document.querySelector(".cities-wrapper"),g=document.body;v.addEventListener("click",()=>{a.classList.add("visible")});a.onclick=function(t){a.classList.remove("visible"),g.classList.remove("modal-open"),v.innerHTML=t.target.innerHTML};const h=document.querySelector(".section-promo__button, .all-buttons"),p=document.querySelector(".modal-wrapper"),s=document.querySelector(".modal-form"),m=document.querySelector(".close-button"),S=document.querySelector(".send-promo-button-modal"),q=window.innerWidth;h.addEventListener("click",()=>{document.body.classList.add("modal-open"),s.classList.add("modal-open-form"),p.classList.add("modal-open-form"),m.classList.add("x-animation"),q<1e3?s.classList.add("modal-form-mobile"):s.classList.remove("modal-form-mobile")});m.addEventListener("click",()=>{document.body.classList.remove("modal-open"),s.classList.remove("modal-open-form"),p.classList.remove("modal-open-form"),m.classList.remove("x-animation")});S.addEventListener("click",()=>{document.body.classList.remove("modal-open"),s.classList.remove("modal-open-form"),p.classList.remove("modal-open-form")});const u=document.querySelector(".toTop-wrapper");window.addEventListener("scroll",()=>{window.scrollY>950?u.classList.add("visible"):u.classList.remove("visible")});u.addEventListener("click",()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})});