jQuery(document).ready(function() {
  $('.works__items').slick({
    dots: true,
    dotsClass: 'slick-dots slider__dots',
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="prev-work__left"><img src="../images/arrow-left.png" alt="" /></div>',
    nextArrow: '<div class="prev-work__right"><img src="../images/arrow-right.png" alt="" /></div>',
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          // centerPadding: '40px',
          slidesToShow: 1
        }
      },
    ]
  });
});