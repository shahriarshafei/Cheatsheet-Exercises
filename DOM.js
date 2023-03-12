// To use external javaScript in your website add <script src=""></script> to end of your body section of your html file
// to use inline javaScript in your website use 'onload=""' in the attribute section of your html tag.
// To use intrnal javaScript in your website user <script>""</script> anywhere on your html file.

// useful DOM commands:
// Select your document (your html page turned into DOM by browser an making a tree hierchy)
    document;
// Select first element child of your docmunet
    document.firstElementChild;
// Select last element child of your document
    document.lastElementChild;
// Selecting the first item in your document, with the specified element, tag or class mentioned-
//-inside the parantheses. (Use # for ids & . for classes. you can combine selectors)
    document.querySelector("");
// Selecting all the items in your document, with the specified element, tag or class mentioned-
//-inside the paratheses. (Use # for ids & . for classes. you can combine selectors)
    document.querySelectorAll("");
// Selecting an element with "x" position in array of all the similar elements.
    document.querySelectorAll("")[x];
// Select all elements by their tag name.
    document.getElementsByTagName("");
// Select an element by it's tag name with "x" position in array of all the similar elements.
    document.getElementsByTagName("")[x];
// Select all elements by their class.
    document.getElementsByClassName("");
// Select an element by their class with "x" position in array of all the similar elements.
    document.getElementsByClassName("")[x];
// Select the element by its ID.
    document.getElementById("");
// Changing the text inside an HTML tag, including text decoratives like <em> & <strong>...
    document.innerHTML;
// Changing ONLY the text inside of an HTML tag.
    document.textContent;
// Changing CSS rules of a selection
    document.style;
// Changing CSS color of a selection
    document.style.color = "";
// Changing CSS font size.
    document.style.fontSize = "";
// Chaning CSS background color.
    document.style.backgroundColor = "";
// Returning document length.
    document.length;
// Outputs classes of an item.
    document.classList;
// Add class to an HTML item.
    document.classList.add("");
// Remove Class of an HTML item.
    document.classList.remove("");
// Change the status of an class in an HTML element.
    document.classList.toggle("");
// Simulates a mouse click on the object.
    document.querySelector("").click();
// Returns all the attributes of an HTML element.
    document.attributes;
//  Return detail of the attribute inside double quotation.
    document.getAttribute("");
// Set the value of an attribute.
    document.setAttribute("selected attribute", "Value of the attribute");

// Adding event listener. "x" is the event that is being listened like "click". the second-
//-phrase is the action that is going to happen. Remember don't include the parentheses after-
//-the function.
    document.addEventListener("x",functionname);
// Or do this instead.
    document.addEventListener("", function(){
        doSomething;
    } )

// To use the identity of the item that has been clicked on for a function use "this".
    document.addEventListener("click", function(){
        this.style.color = "white";
    })

// How to know the specification of the key that has been pressed.
    document.addEventListener("keydown", function(event){
        console.log(event)
    })
    // To better understand this here is a hypothetical scenario:
        function anotherAddEventListener(typeOfEvent, callBack){

                //Detect Event Code...

            var eventThatHappened = {
                eventType: "keypress",
                key: "p",
                durationOfKeypress: 2,
            }

            if (eventThatHappened.eventType === typeOfEvent){
                callBack(eventThatHappened);
            }
        }

// Returning the most recently selected element or JavaScript object.
    $0
    $0.addEventListener;

// Returning the second most recently selected element or JavaScript object.
    $1
    $1.addEventListener;

// How to implement animation.
// Suppose there is a css class called ".pressed" that changes style of it's elements.
// Afformentioned class is being added and then removed after 0.1 seconds
        activeButton.classList.add("pressed");
        setTimeout(function(){activeButton.classList.remove("pressed");}, 100);

// Getter vs Setter: to get a property you just mention it without dedicating a value to it, -
//-to set a property you mention the property and dedicate a value to it by using ="" in front-
//-of it.

// Call Method: Is when you use a method of an object using dot notation & the method after it

// Properties vs Methods: Properties describe something about the object, and Methods are  the-
//-things that the object can do.

// Method vs Function: Method is a function that an object can do, so it hase to be associated-
//-with an object.

// Dot notation: To manipulate objects a dot "." is used after the object name.

// to identify a method, bear in mind that methods come with "()" in front of them.
