let mesure = (content, item) => {
  let titleBox = item.find(".horizontal-slider__title-box");
  let itemsWidth = titleBox.width() * 3;
  const isTablet =
    document.documentElement.clientWidth <= 768 &&
    document.documentElement.clientWidth > 480;
  const isMobile = document.documentElement.clientWidth <= 481;
  if (isTablet) {
    return content.animate({
      width: document.documentElement.clientWidth - itemsWidth,
    });
  }
  if (isMobile) {
    return content.animate({
      width: document.documentElement.clientWidth - titleBox.width(),
    });
  }
  return content.animate({
    width: "520px",
  });
};
$(function () {
  //обрабатываем клик по блоку с классом horizontal-slider__title
  $(".horizontal-slider__title-box").on("click", function (e) {
    e.preventDefault();
    //получаем нужные нам данные
    let $this = $(this),
      //получаем всё блоки list
      container = $this.closest(".horizontal-slider__list"),
      //получаем li по которому кликнули
      item = $this.closest(".horizontal-slider__item"),
      //получаем все другие li
      items = container.find(".horizontal-slider__item"),
      //выбираем из li активный
      activeItem = items.filter(".active"),
      //выбираем из li по которому кликнули блок контен
      content = item.find(".horizontal-slider__content-box"),
      //выбираем у li с классом active блок контент
      activeContent = activeItem.find(".horizontal-slider__content-box");

    //если нет li с классом active по которому кликнули
    if (!item.hasClass("active")) {
      //убираем класс active
      items.removeClass("active");
      //добавляем active кликнутому
      item.addClass("active");
      //у того у кого был active задаём ширину 0
      activeContent.animate({
        width: "0px",
      });
      //кликнутому 530
      mesure(content, item);
      //иначе
    } else {
      item.removeClass("active");
      content.animate({
        width: "0px",
      });
    }
  });

  // клик вне аккордеона
  $(document).on("click", function (e) {
    let $this = $(e.target);
    if (!$this.closest(".horizontal-slider__list").length) {
      $(".horizontal-slider__content-box").animate({
        width: " ",
      });
      $(".horizontal-slider__item").removeClass("active");
    }
  });
});
