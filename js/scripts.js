$(document).ready(function() {
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
});
