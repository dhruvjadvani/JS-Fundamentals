A professional programmer writes code that not only works but also looks clear. It makes it easier for other developers to work with it and saves everybody time. Let's see why this is so important and how to write clear code.

# What is a Style Guide?
Imagine you work in a big IT company where everyone programs in their own style. Let's say you prefer to use two spaces as an indent, name variables with camelCase, and add an empty string between statements. Another developer likes to use four spaces as an indent, prefers underscore notation, and removes all the blank lines.

When you look at code written by another developer, you have to spend a lot of time understanding it because you are used to different code style principles. It will be hard for you to find errors in another developer's code and maintain it. To minimize difficulties, it is better to have some general rules for writing code. It also helps you write code faster because you no longer need to think about minor style principles.

The list of best practices for writing code is called the style guide. Following it makes your code understandable and easy to read by other developers.

In most cases, companies do not need to create their own style recommendation because they can follow the style guides created by other companies. The most popular are:

- Airbnb JavaScript Style Guide https://airbnb.io/javascript/
- Google JavaScript Style Guide https://google.github.io/styleguide/jsguide.html

# Airbnb JavaScript Style Guide
Let's take a look at the most common style guide, the Airbnb JavaScript Style Guide. This manual describes recommendations for spaces, empty strings, semicolons, line length, and so on. Let's consider a few of them!

- Sometimes developers write long lines of code; to read them fully, you need to use horizontal scrolling. The best alternative is to set the maximum line length and move the other characters below. As stated in the Airbnb JavaScript Style Guide, 100 characters for a string is sufficient.
```javascript
// good 
const thePaymentIsActive = isPaymentFromToday(payment.date)
&& isPaymentFromAvaliableAdresses(payment.id) 
&& isPaymentToShow(payment.id)

// bad
const thePaymentIsActive = isPaymentFromToday(payment.date) && isPaymentFromAvaliableAdresses(payment.id) && isPaymentToShow(payment.id)
```

- There is an eternal argument between programmers whether to use spaces or tabs as an indent. The Airbnb JavaScript Style Guide provides an answer to this question and recommends using two spaces. If you like to use tabulation, you can set it to two spaces.
```javascript
// good
function myFunction() {
  const name = "Alex";
}

// only one space is bad
function myFunction() {
 const name = "Alex";
}

// four spaces are bad
function myFunction() {
    const name = "Alex";
}
```
- In functions, you should place one space before the first bracket.
```javascript
// good
function show() {
  console.log("My name is Helen");
}


// bad
function show(){
  console.log("My name is Helen");
}
```
- In the control statements, it is better to put only one space before the opening bracket.
```javascript
// good
if (a === b) {
  console.log(a)
}

// bad 
if(a === b) {
  console.log(a)
}
```
- You should only use one empty line to separate your code.
```javascript
// good 
if (a > b) {
  console.log ("a is bigger than b");
}

// bad 
if (a > b) {


  console.log ("a is bigger than b");


}
```
- Don't forget to write the semicolon at the end of your statements. Otherwise, JavaScript may split your code incorrectly.
```javascript
// good 
const a = 5;
const b = 7;
const c = 10;

// bad
const a = 5
const b = 7
const c = 10
```
- It is better to use camelCase for naming functions, objects, and methods. camelCase means that for names consisting of multiple words, the first word should start with a lowercase letter, and the rest of the words start with a capital letter.
```javascript
// good
function myFunctionToCheckValues() {
  //...
}

// bad
function MyFunctionToCheckValues() {
  //...
}

// bad
function myfunctiontocheckvalues() {
  //...
}
```
# Linters
You have learned a few rules for writing clear code. Now the question is: how do you remember them all when you write code? We are ready to offer you a tool that will help you check all patterns automatically: linters. Now you don't need to remember all the patterns.

With linters, you need to specify the necessary settings, and the tool will notify you if you wrote something wrong. The most popular linters are:

- JSLint — a linter without an extensive list of configuration settings. https://www.jslint.com/
- JSHint — this style has more config parameters than JSLint. https://jshint.com/
- ESLint — one of the most common linters. It can not only show you errors but also fix your scripts automatically. https://eslint.org/
