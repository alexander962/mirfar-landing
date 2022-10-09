jQuery(document).ready(function() {
  let linksArray = $(".works-info__link");
  let itemsArray = $(".modal-works__item");
  linksArray.each((_, item) => {
    {var $elem = $(item);}
    $elem.on('click', (e) => {
        itemsArray.each((_, item) => {
          {var $elem = $(item);}
          if ($elem.hasClass("modal-works__item1") && $(e.target).hasClass("modal-works__item1")) {
            $elem.addClass("active");
          } else if ($elem.hasClass("modal-works__item2") && $(e.target).hasClass("modal-works__item2")) {
            $elem.addClass("active");
          } else if ($elem.hasClass("modal-works__item3") && $(e.target).hasClass("modal-works__item3")) {
            $elem.addClass("active");
          }
        })
      // if ($(e.target).hasClass("modal-works__item1")) {
      //
      // }
        // if ($(e.target).hasClass("modal-works__item2")) {
        //   let $elemActive = $(e.currentTarget);
        //   if ($elemActive.hasClass("active")) {
        //     $elemActive.removeClass("active");
        //   } else {
        //     $elemActive.addClass("active");
        //   }
        // }
      }
    );
  })

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