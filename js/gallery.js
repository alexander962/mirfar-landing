$(document).ready(function() {

  /* This is basic - uses default settings */

  $("a.grouped_elements").fancybox();

  /* Apply fancybox to multiple items */

  $("a.group").fancybox({
    'transitionIn'	:	'elastic',
    'transitionOut'	:	'elastic',
    'speedIn'		:	100,
    'speedOut'		:	200,
    'overlayShow'	:	true,
    'hideOnOverlayClick': true
  });

});