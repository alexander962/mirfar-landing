jQuery(document).ready(function() {
  $(".cards-wrapper__btn").on('click', () => {
      $(".modal-cards").addClass("active");
      setTimeout(() => {
        document.body.style.overflow = "hidden";
      }, 600)
  })

  $(".modal-cards__close").on('click', () => {
      $(".modal-cards").removeClass("active");
      document.body.style.overflow = "";
  })
});