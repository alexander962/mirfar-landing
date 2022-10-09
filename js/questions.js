jQuery(document).ready(function() {
  let linksArray = $(".questions__item");
  linksArray.each((_, item) => {
    {var $elem = $(item);}
    $elem.on('click', (e) => {
        if ($(e.target).hasClass("questions__header") || $(e.target).hasClass("questions__text") || $(e.target).hasClass("questions__img")) {
          let $elemActive = $(e.currentTarget);
          if ($elemActive.hasClass("active")) {
            $elemActive.removeClass("active");
          } else {
            $elemActive.addClass("active");
          }
        }
      }
    );
  })
});