# Arrow functions
Imagine: you’re writing a calculator program in JavaScript. To develop its functionality, you need to write functions. We can write functions using the syntax we already know. For example, here is a function for adding two numbers:
```javascript
function append(a, b) {
  result = a + b;
  return result;
}
```
JavaScript actually has a shorter and more convenient way to write functions, and it's called Arrow functions. Here is the same example as above written with the Arrow functions syntax:
```javascript
let append = (a, b) => a + b;
```
Here, we are not just declaring a function, but we are also storing it in a variable. The Arrow function can be used as an ordinary function:
```javascript
let result = append(30, 5)
console.log(result) // 35
```

# Setting arrow functions
You can use two methods to assign arrow functions:
```javascript
let append = (a, b) => a + b; // short syntax
```
and
```javascript
let append = (a, b) => { return a + b; }; // block syntax
```
The main difference is that curly brackets, unlike round ones, allow us to write multiline instructions inside a function. However, remember that when using this method, you must specify a return directive to return the value.

If there is one parameter in your function, you do not need to frame it with parentheses. For example:
```javascript
let sum = a => a + 2;
sum(1);  // 3
```
At the same time, parentheses are needed in functions without parameters.

# Comparison
Let's create some functions using traditional syntax, block arrow function syntax and short arrow function syntax, and compare them:
```javascript
function mult1(a, b) {
  return a * b;
}
let mult2 = (a, b) => { return a * b; };
let mult3 = (a, b) => a * b;

console.log(mult1(3, 2)) // 6
console.log(mult2(3, 2)) // 6
console.log(mult3(3, 2)) // 6
```
As you can see, the results of all these functions are identical, but the shorter syntax of the arrow function makes it more convenient to write.
It's important to use a tool appropriate for the particular problem. If you have code where all functions are written in a traditional way, don’t use Arrow functions. Always think in terms of the existing code structure.

