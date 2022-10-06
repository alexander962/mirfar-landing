jQuery(document).ready(function() {
  $(window).on('load resize', function() {
    if ($(window).width() < 768) {
      $('.cards-wrapper__blocks-desktop').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1
      });
    } else {
      $(".cards-wrapper__blocks-desktop").slick("unslick");
    }
  });
});