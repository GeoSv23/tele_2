const currentCity = document.querySelector(".header__location-city");
const cityOptionTable = document.querySelector(".cities-wrapper");
const body = document.body;

currentCity.addEventListener("click", () => {
  cityOptionTable.classList.add("visible");
});

cityOptionTable.onclick = function (event) {
  cityOptionTable.classList.remove("visible");
  body.classList.remove("modal-open");
  currentCity.innerHTML = event.target.innerHTML;
};
