/* STEP 1: Declare variables
Use a-z, 0-9, A-Z and underscores, avoiding reserved names
All program variables are generally declared at the beginning (called 'hoisting') */
var myName;
/* STEP 2: Initialize variables
Don't confuse a variable with no value with one that doesn't exist at all */
myName = "Noraa";
/* STEP 3: Updating variables
Once a variable has been declared, this can be done any time */
myName = "Jennifer";
console.log(myName + " - " + typeof(myName));
// STEP 4: Variable types
// Numbers
var myNumber = 12.77;
console.log(myNumber + " - " + typeof(myNumber));
// Strings (use '' or "")
var myPhrase = 'Forge Thyself';
// Booleans
var myBool = true;
console.log(myBool + " - " + typeof(myBool));
// Arrays
var words = ['some', 'body', 'once', 'told']
console.log(words + " - " + typeof(words));
// Objects
var movieObject = {
    movieName: 'anything',
    movieLength: 120
}

console.log(movieObject + " - " + typeof(movieObject));
// STEP 5: Typing (JavaScript is a loosely-typed language)
