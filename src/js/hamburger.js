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
// nextButton.addEventListener('click', function(e){
//   e.preventDefault()
//   slide.classList.toggle('.boards_container--active')
// }

// )
// console.log(prevButton);

//   if (
//     hamburgerButton.classList.contains("burger--active") == true &&
//     hamburgerMenu.classList.contains("burger--active") == true
//   ) {
//     hamburgerButton.classList. ove == "burger--active";
//     hamburgerMenu.classList. ove == "menu--active";
//   } else if (
//     hamburgerButton.classList.contains("burger--active") != true &&
//     hamburgerMenu.classList.contains("burger--active") != true
//   ) {
//       hamburgerButton.classList.add("burger--active");
//       hamburgerMenu.classList.add("menu--active");
//   }
// });

// let form = document.querySelector(".form");
// let formElements = form.elements;
// let button = formElements[11];

// button.addEventListener("click", function (e) {
//   e.preventDefault();
//   let userName = formElements[0].value;
//   let phone = formElements[1].value;
//   let adress =
//     "ул. " +
//     formElements[2].value +
//     " " +
//     "дом. " +
//     formElements[3].value +
//     " " +
//     "корп." +
//     formElements[4].value +
//     " " +
//     "кв. " +
//     formElements[5].value +
//     " " +
//     "эт. " +
//     formElements[6].value;
//   let comment = formElements[7].value;
//   if (formElements[8].checked == true) {
//     paymant = "Оплата наличными";
//   } else {
//     paymant = "Оплата картой";
//   }
//   alert(userName + phone + " " + adress + " " + paymant + " " + comment);
//   console.log(formElements);
//   console.log(userName, phone, adress, paymant, comment);
// });
// $(document).ready(() => {
//   $(".form__btn").on("click", (e) => {
//     e.preventDefault();
//     let formTitle = $(".form__title");
//     let formInput = $(".form__input");
//     // $.each(formTitle),(ndx, item ) =>{
//     //   let formTitleElements= $(item)[ndx].innerText
//     //   console.log(formTitleElements)
//     // }
//     for (let i = 0; i < formTitle.length; i++) {
//       let formTitleElements = formTitle[i].innerText;
//       let formInputValues = $(formInput[i + 1]).val();
//       let result = formTitleElements + ": " + formInputValues;
//       console.log(result);
//     }
//   });
// });
