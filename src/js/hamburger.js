let hamburgerMenu = document.querySelector("#burgerMenu");
let hamburgerButton = document.querySelector("#burger");
hamburgerButton.addEventListener("click", function (e) {
  e.preventDefault();
  hamburgerButton.classList.toggle("burger--active");
  hamburgerMenu.classList.toggle("menu--active");
  document.body.classList.toggle("fancybox-active");
  document.body.classList.toggle("compensate-for-scrollbar");
});

let prevButton = document.querySelector(".boards__nav--prev");
let nextButton = document.querySelector(".boards__nav--next");
let slide = document.querySelector(".boards");
