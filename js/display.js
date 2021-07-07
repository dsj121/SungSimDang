// display opacity animation
$(window).on("scroll", function () {
  var windowHalf = $(window).scrollTop() + $(window).height() * 0.7;
  if (windowHalf >= $(".title").offset().top) {
    $(".title").animate({ opacity: 1 }, 1000);
  }
  $(".dsp_grid > li").each(function () {
    if (windowHalf >= $(this).offset().top) {
      $(this).animate({ opacity: 1 }, 1000);
    }
  });
});
