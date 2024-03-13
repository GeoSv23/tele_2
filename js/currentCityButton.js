let currentCity = document.querySelector(".header__location-city");
const cityOptionTable = document.querySelector(".cities-wrapper");
const body = document.body;

let savedCity = localStorage.getItem("city");
currentCity.innerHTML = savedCity ?? "Moscow";

currentCity.addEventListener("click", () => {
  cityOptionTable.classList.add("visible");
});

cityOptionTable.onclick = function (event) {
  cityOptionTable.classList.remove("visible");
  body.classList.remove("modal-open");
  savedCity = event.target.innerHTML;
  localStorage.setItem("city", savedCity);
  currentCity.innerHTML = savedCity ?? "Moscow";

  console.log(savedCity);
};
