// slide button
const slideBtn = $(".slide_btn > li");
const mainSlide = $(".main_container > .slide");
const left = $(".left_arrow");
const right = $(".right_arrow");
let mainCurrent = 0;

function slideFade(i) {
  slideBtn.removeClass("active");
  slideBtn.eq(i).addClass("active");
  mainSlide.removeClass("active");
  mainSlide.eq(i).addClass("active");
}

slideBtn.on("click", function () {
  let slideNum = $(this).index();
  slideFade(slideNum);
  mainCurrent = slideNum;
});

left.on("click", function () {
  if (mainCurrent === 0) {
    mainCurrent = 2;
  } else {
    mainCurrent -= 1;
  }
  slideFade(mainCurrent);
});

right.on("click", function () {
  if (mainCurrent === 2) {
    mainCurrent = 0;
  } else {
    mainCurrent += 1;
  }
  slideFade(mainCurrent);
});

// play, stop
function autoTrigger() {
  right.trigger("click");
}
let autoSlide;
let isPause = false;

function startSlide() {
  if (isPause == false) {
    isPause = true;
    autoSlide = setInterval(autoTrigger, 3000);
  }
}
function stopSlide() {
  if (isPause == true) {
    clearInterval(autoSlide);
    isPause = false;
  }
}

$(".play_stop > i").on("click", function () {
  if (isPause == false) {
    startSlide();
    $(".play_stop > i").removeClass().addClass("far fa-stop-circle");
  } else {
    stopSlide();
    $(".play_stop > i").removeClass().addClass("far fa-play-circle");
  }
});
