const toTopWrapper = document.querySelector(".toTop-wrapper");

window.addEventListener("scroll", () => {
  const yScroll = window.scrollY;
  if (yScroll > 950) {
    toTopWrapper.classList.add("visible");
  } else {
    toTopWrapper.classList.remove("visible");
  }
});

toTopWrapper.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
