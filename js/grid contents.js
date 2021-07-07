// item1 sub_slide
const subNext = $(".sub_slideContainer>i.fa-chevron-right");
const subPrev = $(".sub_slideContainer>i.fa-chevron-left");
const subSlide = $(".sub_slideContainer>ul>li");
let sub_current = 0; // 현재 슬라이드 인덱스
let total = subSlide.length - 1; // subSlide의 마지막 인덱스 숫자

function sub_next(index) {
  let current;
  let next = subSlide.eq(index);

  if (index == 0) {
    current = subSlide.eq(total);
  } else {
    current = subSlide.eq(index - 1);
  }
  next.css({ left: "100%", top: 0 });
  current.css({ left: "0%", top: 0 });
  next.stop().animate({ left: 0 }, 1000);
  current.stop().animate({ left: "-100%" }, 1000);
}
function sub_prev(index) {
  let current;
  let prev = subSlide.eq(index);
  if (index == total) {
    current = subSlide.eq(0);
  } else {
    current = subSlide.eq(index + 1);
  }
  prev.css({ left: "-100%", top: 0 });
  current.css({ left: "0%", top: 0 });
  prev.stop().animate({ left: 0 }, 1000);
  current.stop().animate({ left: "100%" }, 1000);
}

subNext.on("click", function () {
  sub_current += 1;
  if (sub_current > total) {
    sub_current = 0;
  }
  sub_next(sub_current);
});

subPrev.on("click", function () {
  sub_current -= 1;
  if (sub_current < 0) {
    sub_current = total;
  }
  sub_prev(sub_current);
});

// item2 parallax
$(window).scroll(function (e) {
  var srt = $(window).scrollTop();
  $(".item2").css({ "background-position": `center ${srt * 0.4 - 600}px` });
});

// grid animation

$(window).on("scroll", function () {
  var windowHalf = $(window).scrollTop() + $(window).height() * 0.7;
  $(".item").each(function () {
    if (windowHalf >= $(this).offset().top) {
      $(this).animate({ opacity: 1 }, 1000);
    }
  });
});
