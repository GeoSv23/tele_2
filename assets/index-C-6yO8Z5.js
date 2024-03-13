(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const q=document.querySelector(".slide1"),k=document.querySelector(".slide2");let E;async function C(){try{E=(await(await fetch("https://api.github.com/users?since=0}")).json()).slice(0,10),T(E),document.querySelectorAll(".user-desc")[0].classList.add("visible")}catch(t){console.error("Error fetching users:",t)}}C();function T(t){t.forEach(o=>{const r=document.createElement("div");r.classList.add("slider-user");const i=document.createElement("div");i.classList.add("user-img"),i.innerHTML=`<img src="${o.avatar_url}" alt="${o.login}"> `;const e=document.createElement("p");e.classList.add("user-desc"),e.innerHTML=`<p>${o.login}</p>`,r.appendChild(i),r.appendChild(e),i.addEventListener("click",()=>{e.classList.toggle("visible")}),t.indexOf(o)<5?q.appendChild(r):k.appendChild(r)})}const l=document.querySelector(".header__offer-city"),a=document.querySelector(".background-modal"),M=document.querySelector(".header__option-change"),O=document.querySelector(".header__option-checked"),v=document.querySelector(".cities-wrapper"),n=document.body,S=document.querySelector(".header__location-city");setTimeout(()=>{l.classList.toggle("visible"),a.classList.add("visible"),n.classList.add("modal-open")},200);l.addEventListener("click",()=>{l.classList.toggle("visible"),a.classList.toggle("visible")});M.addEventListener("click",()=>{v.classList.add("visible"),n.classList.add("modal-open")});a.addEventListener("click",()=>{a.classList.remove("visible"),l.classList.remove("visible"),n.classList.remove("modal-open")});S.addEventListener("click",()=>{n.classList.add("modal-open")});v.onclick=function(t){v.classList.remove("visible"),n.classList.remove("modal-open"),S.innerHTML=t.target.innerHTML};O.addEventListener("click",()=>{l.classList.remove("visible"),a.classList.remove("visible"),n.classList.remove("modal-open"),l.style.display="none",a.style.display="none",n.style.display="none"});let h=document.querySelector(".header__location-city");const L=document.querySelector(".cities-wrapper"),$=document.body;let d=localStorage.getItem("city");h.innerHTML=d??"Москва";h.addEventListener("click",()=>{L.classList.add("visible")});L.onclick=function(t){L.classList.remove("visible"),$.classList.remove("modal-open"),d=t.target.innerHTML,localStorage.setItem("city",d),h.innerHTML=d??"Moscow",console.log(d)};const A=document.querySelector(".section-promo__button, .all-buttons"),b=document.querySelector(".modal-wrapper"),u=document.querySelector(".modal-form"),y=document.querySelector(".close-button"),D=document.querySelector(".send-promo-button-modal"),H=window.innerWidth;A.addEventListener("click",()=>{document.body.classList.add("modal-open"),u.classList.add("modal-open-form"),b.classList.add("modal-open-form"),y.classList.add("x-animation"),H<1e3?u.classList.add("modal-form-mobile"):u.classList.remove("modal-form-mobile")});y.addEventListener("click",()=>{document.body.classList.remove("modal-open"),u.classList.remove("modal-open-form"),b.classList.remove("modal-open-form"),y.classList.remove("x-animation")});D.addEventListener("click",()=>{document.body.classList.remove("modal-open"),u.classList.remove("modal-open-form"),b.classList.remove("modal-open-form")});const g=document.querySelector(".toTop-wrapper");window.addEventListener("scroll",()=>{window.scrollY>950?g.classList.add("visible"):g.classList.remove("visible")});g.addEventListener("click",()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})});window.addEventListener("DOMContentLoaded",function(){[].forEach.call(document.querySelectorAll(".input-form"),function(t){let o;function r(i){i.keyCode&&(o=i.keyCode);var e=this.selectionStart;e<3&&i.preventDefault();var s="+7 (___)-___-__-__",c=0,w=s.replace(/\D/g,""),_=this.value.replace(/\D/g,""),m=s.replace(/[_\d]/g,function(f){return c<_.length?_.charAt(c++)||w.charAt(c):f});c=m.indexOf("_"),c!=-1&&(c<5&&(c=3),m=m.slice(0,c));var p=s.substr(0,this.value.length).replace(/_+/g,function(f){return"\\d{1,"+f.length+"}"}).replace(/[+()]/g,"\\$&");p=new RegExp("^"+p+"$"),(!p.test(this.value)||this.value.length<5||o>47&&o<58)&&(this.value=m),i.type=="blur"&&this.value.length<5&&(this.value="")}t.addEventListener("input",r,!1),t.addEventListener("focus",r,!1),t.addEventListener("blur",r,!1),t.addEventListener("keydown",r,!1)})});
