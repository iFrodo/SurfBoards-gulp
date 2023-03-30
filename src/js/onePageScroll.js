
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
  const $this = $(e.currentTarget);
  const target = $this.attr("data-scroll-to");
  const reqSection = $(`[data-section-id = ${target}]`);

  performTransition(reqSection.index());
});

//----------------------------------------------------------------------------------------------------------//

const sections = $("section");
const display = $(".maincontent");
let inScroll = false;
sections.first().addClass("active");

const performTransition = (sectionEq) => {
  if (inScroll === false) {
    inScroll = true;
    const position = sectionEq * -100;
    display.css({
      transform: `translateY(${position}%)`,
    });
    sections.eq(sectionEq).addClass("active").siblings().removeClass("active");
    setTimeout(() => {
      inScroll = false;
    }, 800);
  }
};
// const viewportScroller = () => {
//   const activeSection = sections.filter(".active");
//   const nextSection = activeSection.next();
//   const prevSection = activeSection.prev();
//   return {
//     next() {
//       if (nextSection.length) {
//         performTransition(nextSection.index());
//       }
//     },
//     prev() {
//       if (prevSection.length) {
//         performTransition(prevSection.index());
//       }
//     },
//   };
// };
// $(window).on("wheel", (e) => {
//   const deltaY = e.originalEvent.deltaY;
//   const scroller = viewportScroller();
//   // let map = $('.map')
//   // console.log(map)
//   if (deltaY > 0) {
//     //&& e.target != map
//     //next
//     scroller.next();
//   }
//   if (deltaY < 0) {
//     //prev
//     scroller.prev();
//   }
// });
// $(window).on("keydown", (e) => {
//   const tagName = e.target.tagName.toLowerCase();
//   const scroller = viewportScroller();
//   if (tagName != "textarea" && tagName != "input") {
//     switch (e.key) {
//       case 38:
//         scroller.prev();
//         break;
//       case 40:
//         scroller.next();
//         break;
//     }
//   }
// });

// $("[data-scroll-to]").on('click',(e) => {
//   e.preventDefault();
//   const $this = $(e.currentTarget);
//   const target = $this.attr("data-scroll-to");
//   const reqSection = $(`[data-section-id = ${target}]`);

//   performTransition(reqSection.index());
// });

// //https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
// $(function () {
//   $("body").swipe({

//     //Generic swipe handler for all directions
//     swipe: function (event, direction) {
//       const scroller = viewportScroller();
//       let scrollDirection = "";
//       if (direction === "up") {
//         scrollDirection = "next";
//       }
//       if (direction === "down") {
//         scrollDirection = "prev";
//       }
//       scroller[scrollDirection]();
//     },
//   });
// });
