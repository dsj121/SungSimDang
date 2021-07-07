const REQUIRED = $("ul.required li.td input");

// dropdown
$("#email").on("change", function () {
  let address = $("#email option:selected").val();
  console.log(address);
  $('input[name="email_add"]').val(address);
});

// focus
REQUIRED.on("focus", function () {
  $(this).css({ "border-color": "rgb(118, 118, 118)" });
});

// check
// blank check
$("button[name='submit']").on("click", function (e) {
  // e.preventDefault();
  REQUIRED.each(function () {
    var input_val = $(this).val();
    if (input_val == false) {
      alert("회원 정보를 입력하세요.");
      $(this).css({ "border-color": "#e84d4d" });
      return false;
    }
  });
  // ID, PASSWORD length check
  for (var i = 0; i <= 2; i++) {
    var tg = REQUIRED.eq(i);
    if (tg.val().length > 0 && tg.val().length < 6) {
      alert("글자 제한 수를 맞춰주세요");
      tg.css({ "border-color": "#e84d4d" });
      return false;
    }
  }
  // password match
  if (REQUIRED.eq(1).val() != REQUIRED.eq(2).val()) {
    alert("비밀번호가 일치하지 않습니다");
    return false;
  }
});
