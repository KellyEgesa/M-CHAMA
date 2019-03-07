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
});
