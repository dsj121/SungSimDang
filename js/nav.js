// category depth2
$(".cat_depth1 > li:first-child").on("click", function (e) {
  e.preventDefault();
  $(".cat_depth2").stop().slideToggle(500);
});
$(".cat_depth2").on("click", function (e) {
  e.stopPropagation();
});
$(".cat_depth2").on("mouseleave", function () {
  if ($(".cat_depth2").css("display") == "block") {
    $(".cat_depth2").stop().slideToggle(500);
  }
});

// mobile nav
$(".mo_nav > i").on("click", function () {
  $(".mo_nav").addClass("active");
});
$(".mo_menu > .fas.fa-times").on("click", function () {
  $(".mo_nav").removeClass("active");
});
// mobile sub_category
$(".mo_category>li:first-child").on("click", function () {
  $(".mo_sub_category").slideToggle(500);
});
$(".mo_sub_category").on("click", function (e) {
  e.stopPropagation();
});

// nav scroll
let windowScrollTop;
let mobileDisplay;

$(window).on("scroll", function () {
  mobileDisplay = $(".mo_nav").css("display");
  windowScrollTop = $(window).scrollTop();
  if (mobileDisplay == "none") {
    if (windowScrollTop == 0) {
      $(".util_menu").css({ top: "13px" });
      $("nav").css({ height: "90px" });
      $(".cat_depth2").css({ top: "90px" });
      $(".logo").css({ height: "90px" });
      $(".logo a img").css({ width: "100%" });
    } else if (windowScrollTop > 0) {
      $(".util_menu").css({ top: "-20px" });
      $("nav").css({ height: "70px" });
      $(".cat_depth2").css({ top: "70px" });
      $(".logo").css({ height: "70px" });
      $(".logo a img").css({ width: "78%" });
    }
  }
});
