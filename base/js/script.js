// $(function () {
//   //   jQuery goes here...

//   // Uncomment this line to fade out the red box on page load
//   $(".red-box").fadeTo(3000, 0.2);
//   $(".green-box").fadeTo(3000, 0.5);
//   $(".blue-box").fadeTo(1000, 0.8);
//   $(".blue-box").fadeToggle();
//   $(".blue-box").fadeToggle();
// });
// $(function () {
// $(".blue-box").slideToggle(2000);
// $(".blue-box").slideDown(2000);
// $("p").hide();
// $("p").slideDown(2000);

// });
// $(function () {
//   $(".blue-box").animate({
//     "margin-left": "+=200px",

//   }, 1000, "linear");
//   $(".blue-box").animate({
//     "margin-left": "-=200px",

//   }, 1000, "linear");

// });
// $(function () {
//   $(".blue-box").animate({
//     marginLeft: "200px",
//     opacity: "0",
//     height: "50px",
//     "width": "50px",
//     marginTop: "25px"
//   }, 1000);

// });
// $(function () {
//   $("p").animate({
//     fontSize: "20px"
//   }, 1000);

// });
// $(function () {
//   $(".red-box").fadeTo(1000, 0.2);
//   $(".green-box").delay(1000).fadeTo(1000, 0.5);
//   $(".blue-box").delay(2000).fadeTo(1000, 0.8).fadeOut().delay(1000).fadeIn(3000);


// // });
// $(function () {
//   $(".red-box").fadeTo(1000, 0, function () {
//     $(".green-box").fadeTo(1000, 0, function () {
//       $(".blue-box").fadeTo(1000, 0);
//     });
//   });
//   // not so nice for clean code.  


// });
$(function () {
  $("p").css("background-color", "rgba(180,180, 30, 0.8)")
  $(".red-box").css("background-color", "rgba(180,180, 30, 0.8)")
  $("#list").css("background-color", "rgba(180,180, 30, 0.8)")
  $("input[type='text']").css("background-color", "rgba(180,180, 30, 0.8)")
  $("h2, p, input").css("background-color", "rgba(180,180, 30, 0.8)")
  $("li:last").css("background-color", "rgba(180,180, 30, 0.8)")
  $("li:odd").css("background-color", "rgba(180,180, 30, 0.8)")
  $("input:email").css("background-color", "rgba(180, 180, 20, 1")
  $("#list").find("li").css("background-color", "rgba(180, 180, 20, 0.8")
  $("#list").children("li").css("background-color", "rgba(180, 180, 20, 0.8")
  $("#list").siblings(":header").css("background-color", "rgba(180, 180, 20, 0.8")
  $("#list").prev().css("background-color", "rgba(180, 180, 20, 0.8")
  $("#list").next().css("background-color", "rgba(180, 180, 20, 0.8")
  $("#list").next().css("background-color", "rgba(180, 180, 20, 0.8")

  $("#list").find("li").filter(":even").css("background-color", "rgba(180, 180, 20, 0.8")
  $("#li").filter("li").filter(":even").css("background-color", "rgba(180, 180, 20, 0.8")



})