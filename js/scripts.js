


var balance = 1000
document.getElementById("bal").innerHTML = balance;
$(document).ready(function() {

setTimeout(popup, 3000);
function popup() {}
$("#onclick").click(function() {
$("#contactdiv").css("display", "block");
});
$("#contact #cancel").click(function() {
$(this).parent().parent().hide();
});
// Contact form popup submit-button click event.
  var title = $("#title").val();
  var lead = $("#lead").val();
  var description = $("#description").val();
var title = $("#title").val();
var lead = $("#lead").val();
var description = $("#description").val();
if (!(title == "" || lead == "" || description == "")) {
  // To Enable Submit Button
$("#submit").removeAttr('disabled');
$("#submit").css({
"cursor": "pointer",
"box-shadow": "1px 0px 6px #333"
});
}
});
// On Click Of Submit Button
$("#contact").submit(function() {
  $("#contactdiv").slideUp();
alert("Form Submitted Successfully..!!");

  $("#signin").click(function(event){
    event.preventDefault();
    $(".ian").hide()
    $(".index").show()

  })
  $("#signout").click(function() {
    location.reload();
  })
  $("#submit").attr('disabled', 'disabled');
  $("form").keyup(function() {
    // To Disable Submit Button
    $("#submit").attr('disabled', 'disabled');
    // Validating Fields
    var title = $("#title").val();
    var lead = $("#lead").val();
    var description = $("#description").val();
    if (!(title == "" || lead == "" || description == "")) {
      // To Enable Submit Button
      $("#submit").removeAttr('disabled');
      $("#submit").css({
        "cursor": "pointer",
        "box-shadow": "1px 0px 6px #333"
      });
    }
  });
  // On Click Of Submit Button
  $("#submit").click(function() {
    $("#submit").css({
      "cursor": "default",
      "box-shadow": "none"
    });
    alert("Form Submitted Successfully..!!");
  });
  $('.icon').addClass('animated heartBeat');
  $('.icon').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
});
