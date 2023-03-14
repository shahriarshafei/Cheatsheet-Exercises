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
