const currentCityDesktop = document.querySelector(".header__location-city");
const currentCityMobile = document.querySelector(
  ".header__location-city-mobile"
);
const cityOptionDesktop = document.querySelector(".city-option");
const cityOptionMobile = document.querySelector(".city-option-mobile");

currentCityDesktop.addEventListener("click", () => {
  cityOptionDesktop.classList.add("visible");
});

currentCityMobile.addEventListener("click", () => {
  cityOptionMobile.classList.add("visible");
});

/////
const body = document.body;

cityOptionDesktop.onclick = function (event) {
  cityOptionDesktop.classList.remove("visible");
  body.classList.remove("modal-open");
  currentCityDesktop.innerHTML = event.target.innerHTML;
};
//mobile
cityOptionMobile.onclick = function (event) {
  cityOptionMobile.classList.remove("visible");
  body.classList.remove("modal-open");
  currentCityMobile.innerHTML = event.target.innerHTML;
};
