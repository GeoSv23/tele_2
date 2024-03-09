const floatOffer = document.querySelector(".header__offer-city");

//Уточнение города через 1сек
setTimeout(() => {
  floatOffer.classList.toggle("visible");
}, 1000);

floatOffer.addEventListener("click", () => {
  floatOffer.classList.toggle("visible");
});

console.log(floatOffer);

///////////////////

const changeCityDesktop = document.querySelectorAll(".header__option")[1];
const cityOptionDesktop = document.querySelector(".city-option");
const changeCityMobile = document.querySelectorAll(".header__option")[2];
const cityOptionMobile = document.querySelector(".city-option-mobile");
const body = document.body;

changeCityDesktop.addEventListener("click", () => {
  cityOptionDesktop.classList.add("visible");
  body.classList.add("modal-open");
});

changeCityMobile.addEventListener("click", () => {
  cityOptionMobile.classList.add("visible");
  body.classList.add("modal-open");
});

//////////////////

//выбор города в мод окне

const currentCity = document.querySelector(".header__location-city");
//desktop
cityOptionDesktop.onclick = function (event) {
  cityOptionDesktop.classList.remove("visible");
  body.classList.remove("modal-open");
  currentCity.innerHTML = event.target.innerHTML;
};
//mobile
cityOptionMobile.onclick = function (event) {
  cityOptionMobile.classList.remove("visible");
  body.classList.remove("modal-open");
  currentCity.innerHTML = event.target.innerHTML;
};
