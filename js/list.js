const SORT_ARR = ["", "bread", "trad", "cake", "roll", "present"];
const LIST = $(".list_display_container>ul");
let current_cat = 0; // sort index
let current_bold = 0; // category index

// sort function
function sorting(n) {
  if (n > 0) {
    LIST.find("li").css({ display: "none" });
    LIST.find(`li.${SORT_ARR[n]}`).css({ display: "block" });
    current_cat = n;
  } else {
    if (current_cat == 0) {
      return false;
    } else {
      LIST.find("li").css({ display: "none" });
      LIST.find("li").css({ display: "block" });
    }
  }
}
// category bold
function toggleBold(n) {
  $(".list_cat_container > ul > li").removeClass();
  $(".list_cat_container > ul > li").eq(n).addClass("active");
}

$(".list_cat_container > ul > li").on("click", function () {
  var index = $(this).index();
  toggleBold(index);
  sorting(index);
});
