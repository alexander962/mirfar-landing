jQuery(document).ready(function() {
  $(window).on('load resize', function() {
    if ($(window).width() < 768) {
      $('.cards-wrapper__blocks-desktop').slick({
        dots: true,
        dotsClass: 'slick-dots slider__dots',
        infinite: false,
        speed: 500,
        // fade: true,
        // cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        // leftPadding: '12px',
      });
    } else {
      $(".cards-wrapper__blocks-desktop").slick("unslick");
    }
  });
});