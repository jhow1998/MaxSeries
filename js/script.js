// $('.owl-carousel').owlCarousel({
//   loop:true,
//   margin:1,
//   nav:false,
//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:3
//       },
//       1000:{
//           items:5
//       }
//   }
// })
var swiper = new Swiper(".movies-slide", {
  spaceBetween: 20,
  grabCursor:true,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
      330: {
        slidesPerView: 2,
      },
      500: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
  },
});