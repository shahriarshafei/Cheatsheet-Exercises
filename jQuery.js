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
