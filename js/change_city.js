//
const floatOffer = document.querySelector(".header__offer-city");
const modalBackground = document.querySelector(".background-modal");
const changeCity = document.querySelector(".header__option-change");
const confirmCity = document.querySelector(".header__option-checked");
const cityOptionTable = document.querySelector(".cities-wrapper");
const body = document.body;
const currentCity = document.querySelector(".header__location-city");

//закрыть модальное окно при нажатии не на парящее меню
modalBackground.addEventListener("click", () => {
  modalBackground.classList.remove("visible");
  floatOffer.classList.remove("visible");
  body.classList.remove("modal-open");
});
//Уточнение города через 2м.сек.
setTimeout(() => {
  floatOffer.classList.toggle("visible");
  modalBackground.classList.add("visible");
  body.classList.add("modal-open");
}, 200);

floatOffer.addEventListener("click", () => {
  floatOffer.classList.toggle("visible");
  modalBackground.classList.toggle("visible");
});

//Нажатие на всплывающем меню кнопки 'изменить город' приводит к открытию таблтцы городов

changeCity.addEventListener("click", () => {
  cityOptionTable.classList.add("visible");
  body.classList.add("modal-open");
});

//выбор города в мод окне

// убрать скролл когда открыта таблица городов
currentCity.addEventListener("click", () => {
  body.classList.add("modal-open");
});

//при нажатии на город скролл ичезает

cityOptionTable.onclick = function (event) {
  cityOptionTable.classList.remove("visible");
  body.classList.remove("modal-open");
  currentCity.innerHTML = event.target.innerHTML;
};

confirmCity.addEventListener("click", () => {
  floatOffer.classList.remove("visible");
  modalBackground.classList.remove("visible");
  body.classList.remove("modal-open");
  //на скорую руку решение
  floatOffer.style.display = "none";

  modalBackground.style.display = "none";

  body.classList.style.display = "none";
});
