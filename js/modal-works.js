jQuery(document).ready(function() {
  $(".works-info__link").on('click', () => {
    $(".modal-works").addClass("active");
    setTimeout(() => {
      document.body.style.overflow = "hidden";
    }, 600)
  })

  $(".modal-works__close").on('click', () => {
    $(".modal-works").removeClass("active");
    document.body.style.overflow = "";
  })
});