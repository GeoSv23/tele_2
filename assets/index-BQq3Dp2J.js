(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function v(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=v(e);fetch(e.href,t)}})();const c=document.querySelector(".header__offer-city"),m=document.querySelector(".header__offer-city-modal");setTimeout(()=>{c.classList.toggle("visible"),m.classList.add("visible"),i.classList.add("modal-open")},1e3);c.addEventListener("click",()=>{c.classList.toggle("visible"),m.classList.toggle("visible")});console.log(c);const b=document.querySelectorAll(".header__option")[1],r=document.querySelector(".city-option"),g=document.querySelectorAll(".header__option")[2],l=document.querySelector(".city-option-mobile"),i=document.body;b.addEventListener("click",()=>{r.classList.add("visible"),i.classList.add("modal-open")});g.addEventListener("click",()=>{l.classList.add("visible"),i.classList.add("modal-open")});const y=document.querySelector(".header__location-city");r.onclick=function(o){r.classList.remove("visible"),i.classList.remove("modal-open"),y.innerHTML=o.target.innerHTML};l.onclick=function(o){l.classList.remove("visible"),i.classList.remove("modal-open"),y.innerHTML=o.target.innerHTML};const L=document.querySelector(".header__location-city"),f=document.querySelector(".header__location-city-mobile"),d=document.querySelector(".city-option"),a=document.querySelector(".city-option-mobile");L.addEventListener("click",()=>{d.classList.add("visible")});f.addEventListener("click",()=>{a.classList.add("visible")});const p=document.body;d.onclick=function(o){d.classList.remove("visible"),p.classList.remove("modal-open"),L.innerHTML=o.target.innerHTML};a.onclick=function(o){a.classList.remove("visible"),p.classList.remove("modal-open"),f.innerHTML=o.target.innerHTML};
