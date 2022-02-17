// alert("it works!");
$("h1").addClass("changecolor");
$("h1").removeClass("changecolor");
$("h1").addClass("changecolor changeFont changeFontStyle");
$("h1").removeClass("changeFontStyle");
console.log($("h1").hasClass("changecolor")); // returns boolean value i.e, true or false


// manipulating text in jQuery
$("h1").text("santosh"); // reads everything inside the paranthesis as text
// just changes the text, not the html
$("button").text("don't click me!");
$("h1").html("<em> Hey, there!</em>"); // em tag gets added to h1
$("button").html("<em>click me to change the color of the text!</em>");

//manipulating attributes in jQuery
console.log($("a").attr("href")); // get attribute
$("a").attr("href", "https://www.yahoo.com"); // set attribute


// adding event listeners using jQuery

// click event
$("h1").click(function() {
  $("h1").css("color", "yellow");
});

// adding an event listener to all the buttons simultaneously
// $("button").click(function() {
//   $("h1").css("color", "purple");
// });
// the code above basically selects all the buttons and adds event listeners to all the buttons

// we can also add keypress event listener in  a similar way
$("input").keypress(function(event) {
  $("h1").text(event.key);
});
// what the above piece of code does is whatever letter is typed into input
// becomes the h1 of the web page.

// adding any other eventlistener  like mouseover
$("h1").on("mouseover", function() {
  $("h1").css("color", "aqua");
});

// adding and removing elements using the before and after methods

$("h1").before("<button>I was created using the before method </button>");

// the above line of code adds a button before the h1 tag

$("h1").after("<button> I was created using the after method </button>");

// the above line of code adds a button after the h1 tag

$("h1").prepend("<button> I was created using the prepend method </button>");
// the above line of code adds a button before the h1 tag in the same line

$("h1").append("<button> I was created using the append method </button>");
// the above line of code adds a button after the h1 tag in the same line

// $("h1").remove();
// the above line of code will remove the h1 tag


// adding animations using jQuery
$("button").click(function() {
  // $("h1").hide(); the above line of code will make the h1 hidden when any of the button is clicked
  // $("h1").toggle(); // toggle the apperance of h1 by clicking on the button
  // $("h1").fadeOut();
  // $("h1").fadeIn();
  // $("h1").fadeToggle();
  $("h1").slideToggle(); // very helpful for drop down menu

  // we can also use some custom animations using the animate method
  $("h1").animate({opacity : 0.9});



});
