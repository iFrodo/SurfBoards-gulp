
//methods
// $.fn.fullpage.setAllowScrolling(false);

let doFullpage = document.documentElement.clientWidth;
$(document).ready(function () {
  //что бы не работал на мобилках
  // if (doFullpage > 768) {
    $("#fullpage").fullpage({
      //options here
      scrollOverflow: false,
      autoScrolling: true,
      scrollHorizontally: true,
      verticalCentered: false,
      fitToSection: false,
      navigation: true,
      // anchors:['#why', '#boards', '#reviews'],
      scrollOverflow: false,

      // fixedElements:('.header')
    });

  }
);
$("[data-scroll-to]").on('click',(e) => {
  e.preventDefault();
  // находим имя секции
  const sectionName = $(e.currentTarget).attr('data-scroll-to');
  // находим её индекс
  const sectionIndex = $(`[data-section-id="${sectionName}"]`).index();
  // пользуемся документацией библиотеки и находим там метод для перехода к секции
  // там индекс начинается с одного, а в JS с нуля, поэтому добавляем к индексу + 1
  // чтоб всё работало правильно
  $.fn.fullpage.moveTo(sectionIndex + 1);
});

