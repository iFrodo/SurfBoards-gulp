const slider = $(".boards__list").bxSlider({
  pager: false,
  controls: false,
});

$(".boards__nav--next").on('click',(e) => {
  e.preventDefault();
  slider.goToNextSlide();
});
$(".boards__nav--prev").on('click',(e) => {
  e.preventDefault();
  slider.goToPrevSlide();
});
