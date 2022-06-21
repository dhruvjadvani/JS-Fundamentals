/*
Often we have to repeat the same action in many parts of the script, for example, summing up different data entered by users each time,
or displaying pop-ups with product descriptions for an online store.

To avoid code duplication and better structure large programs, there are functions.

Functions in JavaScript can be built-in or user-defined, that is, created specifically by the programmer. 
You have already worked with a built-in function console.log(). 
*/


//Basic Syntax
function name(parameters) {
   // function body 
}

//To create a function, you need to write a keyword function, come up with a name for it and open parentheses. 
//In parentheses, you can specify the parameters: data that you want to transfer to the program.
//The code of the function, also called a function body, must be written inside the curly brackets.

function writeMessage() {
   console.log("Find and book your ideal tour!");
}

//Our new feature has an empty list of parameters and a name writeMessage. Let's try calling this function.
//To do this, you need to write the function name and a pair of parentheses.


function writeMessage() {
   console.log("Find and book your ideal tour!");
}

writeMessage(); // Find and book your ideal tour!


//The call of writeMessage() executes the code written in the function body. The function can be called more than once:

function writeMessage() {
   console.log("Find and book your ideal tour!");
}

writeMessage(); // Find and book your ideal tour!
writeMessage(); // Find and book your ideal tour!


//The function is called anywhere in the file. You can call the function both before and after its creation.

writeMessage(); // Find and book your ideal tour!

function writeMessage() {
   console.log("Find and book your ideal tour!");
}

writeMessage(); // Find and book your ideal tour!


//Parameters
//We can transfer any information inside the function using the parameters.

// Let's try to pass two arguments to the function: a and b.

function quotient(a, b) {
  console.log(a / b);
}

quotient(10, 5); // 2
quotient(6, 2);  // 3



// We called the function by passing the values that were copied into variables a and b, and used in the function body.




// Returning a value
//In JS, it is possible to return the function result using the return statement:

function multiply(a, b) {
  return a * b;
}

let result = multiply(10, 2);
console.log(result); // 20

// The return can be located anywhere in the body of the function. 
// Once the execution of the code reaches the point of return (pun intended), the function stops and the value returns to the code that called it.










