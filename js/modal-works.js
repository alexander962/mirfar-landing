jQuery(document).ready(function() {
  let itemsArray = $(".modal-works__item");

  $(".works-info__link").on('click', () => {
    $(".modal-works").addClass("active");
    setTimeout(() => {
      document.body.style.overflow = "hidden";
    }, 600)
  })

  $(".modal-works__close").on('click', () => {
    $(".modal-works").removeClass("active");
    setTimeout(() => {
      itemsArray.each((_, item) => {
        {var $elem = $(item);}
        $elem.removeClass("active");
      })
    }, 600)
    document.body.style.overflow = "";
  })
});