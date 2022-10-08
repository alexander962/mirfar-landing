jQuery(document).ready(function() {
    $('.video__blocks').slick({
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<div class="prev-video__left"><img src="../images/arrow-left.png" alt="" /></div>',
      nextArrow: '<div class="prev-video__right"><img src="../images/arrow-right.png" alt="" /></div>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: false,
            dots: true,
            dotsClass: 'slick-dots slider__dots',
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            dotsClass: 'slick-dots slider__dots',
            slidesToShow: 1,
            centerMode: true,
          }
        },
      ]
    });
});