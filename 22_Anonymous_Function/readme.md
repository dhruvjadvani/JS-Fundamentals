some functions can be anonymous. Using such functions allows you to write shorter code and makes your program more readable.

# What is an anonymous function?
Let’s remember a common way to define a function:
```
function myFunction() {
  // ...
}

myFunction();
```
However, it's also possible to rewrite the code above in a different way:
```
const myFunction = function() {
  //...
}

myFunction();
```
As you've noticed, we saved the function in the variable myFunction and didn't use any function name between the function keyword and parentheses. It means that we used an anonymous function, that is, a function declared without specifying its name.

There are some nuances to anonymous functions. When you define a named function, you can call it in any part of your code because the browser creates a reference to this function before calling it. So it doesn't matter if you place the function definition before or after calling it: the program will still work fine.
```
// this code works

setPrice = function setPrice() {
  // ...
}

setPrice();

// this code works too

setColor();

const setColor = function setColor() {
 // ...
}
```
However, this is not the case with anonymous functions. These functions are created when they are called. Thus, you can only access an anonymous function after it has been defined.
```
// this code works

const setPrice = function() {
  // ...
}

setPrice();

// this code doesn't work

setColor();

const setColor = function() {
  // ...
}
```
