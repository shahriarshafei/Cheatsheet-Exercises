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
