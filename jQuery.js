// Always add jQuery CDN on top of your javaScript link.

// Selecting en element using jQuery.
    //document.querySelector("h1"); using $ in jQuery is not similar to this
    document.querySelectorAll|("h1");
    jQuery("h1") //OR 
    $("h1")

// Changing CSS rules.
    document.querySelectorAll("h1").style.color ="red";
    $("h1").css("color", "red");
// Outputing the value of a css rule.
    document.querySelectorAll("h1").style.color;
    $("h1").css("color");

// To safeguard loding our jQuery cdn, meaning make sure jQuery library is fully loaded before-
//-browser renders the rest of the page, do this: (still it's best to move everything to the-
//-end, just before the closing of </body> element)
    $(document).ready(function(){
        $("h1").css("color", "red");
    })

// Add class.
    document.querySelectorAll("h1").classList.add("big-title");
    $("h1").addClass("big-title");

// Adding mutiple classes.
    $("h1").addClass("big-title margin-50");

// Removing class.
    $("h1").removeClass("big-title");

// How to check if an element has a specific class.
    $("h1").hasClass("margin-50");

// Change text using jQuery.
    $("h1").text("bye"); //Similar to .textContent
    $("h1").html("<em>bye</em>"); //Similar to .innerHTML

// Setting attributes.
    $("a").attr("href", "www.google.com");
// Getting the value of an attribute.
    $("a").attr("href");
// Class also is an atrribute so you can use this method to get classes names.
    $("a").attr("class");

// Adding evenet listeners using jQuery.
    $("button").click(function(){
        $("h1").css("color", "purple");
    });

// Replacing for loop when adding event listeners.
    for(var i = 0; i<x; i++){
        document.querySelectorAll("button")[i].addEventListener("click", function(){
            document.querySelector("h1").style.color = "purple";
        })
    }
    //is equal to
    $("button").click(function(){
        $("h1").css("color", "purple");
    });
    // Because jQuery looks for every button element and add event listener to it.
