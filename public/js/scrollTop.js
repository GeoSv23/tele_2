const toTopWrapper = document.querySelector(".toTop-wrapper");
window.addEventListener("scroll", () => {
  const yScroll = window.scrollY;
  console.log(yScroll);
  if (yScroll > 650) {
    console.log(`${yScroll}px`);
    toTopWrapper.style.top = `${yScroll}px`;
    console.log(toTopWrapper.style.position);
  }
});
console.log("Вертикальный скролл:", scrollY);
