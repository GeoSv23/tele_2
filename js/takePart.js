// при нажатии на кнопку 'принять участие' первой секции открывается модальное окно
const takePartButton = document.querySelector(
  ".section-promo__button, .all-buttons"
);
const modalWrapper = document.querySelector(".modal-wrapper");
const modalFormForm = document.querySelector(".modal-form");
const closeButton = document.querySelector(".close-button");
const sendFormModal = document.querySelector(".send-promo-button-modal");
const mediaQueryMobile = window.innerWidth;

//при нажатии появляется темный фон и останавливается скролл
takePartButton.addEventListener("click", () => {
  document.body.classList.add("modal-open");
  modalFormForm.classList.add("modal-open-form");
  modalWrapper.classList.add("modal-open-form");
  closeButton.classList.add("x-animation");
  if (mediaQueryMobile < 1000) {
    modalFormForm.classList.add("modal-form-mobile");
  } else {
    modalFormForm.classList.remove("modal-form-mobile");
  }
});

//крестик в углу формы закрыввает ее
closeButton.addEventListener("click", () => {
  document.body.classList.remove("modal-open");
  modalFormForm.classList.remove("modal-open-form");
  modalWrapper.classList.remove("modal-open-form");
  closeButton.classList.remove("x-animation");
});

///кнопка отправки формы  из модального окна
sendFormModal.addEventListener("click", () => {
  document.body.classList.remove("modal-open");
  modalFormForm.classList.remove("modal-open-form");
  modalWrapper.classList.remove("modal-open-form");
});
