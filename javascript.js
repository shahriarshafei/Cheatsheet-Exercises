// Typing disciplin in Javascript
    camelCasing = variables;
    Pascal =

// How to name variables
    my_name, myName, my123;

// Data types in Javascript
    String, Number, Boolean

// Creating new variable and new Object and function
    var variable = "Something";
    var variable = 123;
    var object = new Object();                          //Creat a new object of Object
    function doSomething(x){
        var done = x+2
        return done;
    };           //To call function simply write doSomething(x);

// Combining Strings and variables (Concatenation)
    console.log("Hello " + variable + " .");

// Print
    alert(""); //Put out notification
    console.log(""); //Print out in the console

// User Input (Similar to scanner in Java)
    prompt(""); //Prompt user to input something

// Other useful methods
    variable.length;            //Return the length of a String
    variable.slice(x,1);        //Cut down a string, starts from charachter at "x" position and ends but not include at charachter in the "y" position
    variable.toUpperCase();     //Convert every charachter into it's upper case form
    variable.toLowerCase();     //Convert every charachter into it's lower case form

// Arithmetic operators
    x+y;                        //Addition
    x-y;                        //Subtraction 
    x/y;                        //Division
    x*y;                        //Multiplication
    x%y;                        //Modulo
    x++;                        //Increment
    x--;                        //Decrement
    x+=y;                       //Short hand for x = x + y;

// Order of priority
// () > * & / > + & -

// Math methods
    Math.floor(); //Removes every decimals regardless of their values
    Math.ceil(); //Round number to the next whole number
    Math.round(); //Round number to the closest whole number  
    Math.pow(x,y); //Raises value of "x" to the power of "y"
    Math.random(); //Generates psuedo random number between 0 and 0.9999999999999999 with 16 decimals
    variable.toFixed(x); //Declares numbers of decimals placed to "x" amount

// Comparative operators
    x&&y // "x" And "y" must be true to proceed
    x||y // "x" Or "y" either one being true is suffice for the procedure to go through
    x>y // "x" bigger than "y" OR "y" smaller than "x"
    x>=y // "x" bigger than or equal to "y" OR "y" smaller than or equal to "x"
    x===y // "x" is completely equal to "y", even their data type is the same
    x==y // Only the value of "x" is equal to the value of "y"
    x!==y // "x" is not equal to "y"

// If Statement
    if(variable>x){} //
    else if(variable<y){}
    else{}
