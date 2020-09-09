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
// $(function () {







// $("p").css("background-color", "rgba(180,180, 30, 0.8)")
// $(".red-box").css("background-color", "rgba(180,180, 30, 0.8)")
// $("#list").css("background-color", "rgba(180,180, 30, 0.8)")
// $("input[type='text']").css("background-color", "rgba(180,180, 30, 0.8)")
// $("h2, p, input").css("background-color", "rgba(180,180, 30, 0.8)")
// $("li:last").css("background-color", "rgba(180,180, 30, 0.8)")
// $("li:odd").css("background-color", "rgba(180,180, 30, 0.8)")
// $("input:email").css("background-color", "rgba(180, 180, 20, 1")
// $("#list").find("li").css("background-color", "rgba(180, 180, 20, 0.8")
// $("#list").children("li").css("background-color", "rgba(180, 180, 20, 0.8")
// $("#list").siblings(":header").css("background-color", "rgba(180, 180, 20, 0.8")
// $("#list").prev().css("background-color", "rgba(180, 180, 20, 0.8")
// $("#list").next().css("background-color", "rgba(180, 180, 20, 0.8")
// $("#list").next().css("background-color", "rgba(180, 180, 20, 0.8")

// $("#list").find("li").filter(":even").css("background-color", "rgba(180, 180, 20, 0.8")
// $("#li").filter("li").filter(":even").css("background-color", "rgba(180, 180, 20, 0.8")
// $("li").first().css("background-color", "rgba(180, 180, 20, 0.8")
// $("li").eq(5).css("background-color", "rgba(180, 180, 20, 0.8")
// $("li").eq(-2).css("background-color", "rgba(180, 180, 20, 0.8")

// $("li").not(":first").css("background-color", "rgba(180, 180, 20, 0.8")






// })
// $(function () {
// $("ul ul:first").append("<li>I'm gonna be the last subitem</li>");
// $("<li>I'm gonna be the last subitem</li>").appendTo($("ul ul:first"));
// $("ul ul").prepend("<li>I'm gonna be the first subitem</li>");
// $("<h4> Nick Tilllinghast<?h4>").prependTo("#content");
// $(".red-box").after("<div class='red-box' > Another Red box</div>")
// $(".blue-box").before("<div class='blue-box' > Another blue box</div>")


// $(".blue-box").before(function () {
//   return "<div class='blue-box'> blue 2</div>"
// })
// $(".blue-box").before($(".red-box"));
// $("p").after($("#list"));


// })
// $(function () {

// $("li").replaceWith("<li>Replaced.</li>")
// $("li").replaceWith(function () {
//   return "<li> replaced.jjjj</li>"
// })
// var firstListItem = $("li:first");
// $("p").replaceWith(firstListItem);
// $(".red-box, .blue-box").replaceWith("<div class='green-box' > Another green box</div>")
// $(".blue-box").replaceWith("<div class='green-box' > Another green box</div>")
// $("<div class='green-box' > big green box</div>").replaceAll(".red-box, .blue-box")
// })


// $(function () {
// $("li").remove();
// $("form").children().not("input:text, textarea, br").remove();
// var detachedListItem = $("li").detach();

// detach doesn't remove the event handlers and data connected with item. 
// $("#content").append(detachedListItem);
// $("p:first").empty();
// $(".red-box, .blue-box, .green-box").empty();
// })
// $(function () {
// attr(), prop(), val()

// var specialLink = $("#special-link");
// console.log(specialLink.attr("href"))
// console.log(specialLink.attr("title"))
// specialLink.attr("href", "http://linkedin.com")

// var checkbox = $("input:checkbox");
// console.log(checkbox.prop("checked"))

// var textInput = $("input:text");
// textInput.val("nick tillinghast")
// console.log(textInput.val());
// var rangeInput = $("input[type='range']");
// console.log(rangeInput.val());

// })
//=====================image slideshow===========================
$(function () {
  var galleryImage = $(".gallery").find("img").first();
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg",
  ];
  var i = 0;
  setInterval(function () {
    i = (i + 1) % images.length;
    galleryImage.fadeOut(function () {
      $(this).attr("src", images[i]);
      $(this).fadeIn();
    })
    console.log(galleryImage.attr("src"));
  }, 3000);

})

