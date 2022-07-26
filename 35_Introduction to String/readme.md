# What is a string?
Let's start by looking at what textual data means in this case. A string represents a sequence of characters. Not just letters but also digits, spaces, underscores, dashes, and everything else you can see on your keyboard. So, how can you create a variable to store this data? You might be thinking it can be done like this:
```javascript
let text = Hello, World!
```
But unfortunately, that's not correct. You need to use quotes so that Javascript understands what's going on when you try to assign text to a variable:
```javascript
let text = 'Hello, World!';
```
There we go! You can also use double quotes instead of single quotes, and backticks if the text contains multiple lines:
```javascript
let text1 = 'Hello, World!';
let text2 = "How are you?";
let text3 = `*One year later*`;
let text4 = `Hello, World.
We haven't talked for a while. I hope you are fine.
Sincerely yours, Hyperskill`;
```

This is how you store a piece of text, and this is what you call a string. By the way, if it's necessary to include quote marks/apostrophes in a string, you can insert a backslash before them so that JavaScript doesn't think it's a closing quote:
```javascript
let mystring = 'I\'m here';
console.log(mystring); // I'm here
```
Alternatively, you can use double quotes to wrap a string containing single quotes and vice versa, as you can see in the following examples:
```javascript
let myString = "I'm here";
console.log(myString); // I'm here

let yourString = 'The book I read said, "Dr. Almanaco was a great astrologer."';
console.log(yourString); // The book I read said, "Dr. Almanaco was a great astrologer."
```

# String length
In JavaScript, length is a string property that enables you to find the length of the given string. It's used with various JavaScript methods that you will study later, and it's important to remember that length is a property, not a method. Also, keep in mind that if the string is empty, the length property will return 0. Here's a quick example:
```javascript
let mystring = 'Hello, World!';
console.log(mystring.length); // 13
```
Everything between the outer quotes of a string is counted when calculating its length. This includes spaces, numbers, and special characters.

# Operations with strings
You might be surprised to discover that you can perform various operations with strings using mathematical operators. However, the result of some of these operations may not be what you would expect. Here's a list of them:

- Summing two strings — this forms a new string by 'gluing' the original strings together. It's known as concatenation:
```javascript
let mystring = 'Hello, ' + 'World!';
console.log(mystring); // Hello, World!
```
- Adding a string and a number — this also creates a new string. Despite the datatypes being different, JavaScript will automatically cast a number to a string and concatenate them:
```javascript
console.log('21' + 21); // '2121'
console.log(46 + '7'); // '467'
console.log(12.34 + '56'); // '12.3456'
```
If you use one of the other mathematical operators (-, *, or /), JavaScript will attempt to convert everything to a number before performing the calculation. Take a look:

- The below examples will all work because it's possible to convert the strings into numbers:
```javascript
console.log('12' - 10); // 2
console.log('90.10' - 10); // 80.10
console.log('12' * 12); // 144
console.log('12' * '12'); // 144
console.log('12' / '12'); // 1
```
- However, because JavaScript can't convert some of the characters into numbers, the result of the following operations will all be NaN. This stands for Not A Number — a NaN has the datatype number but is not a real number:
```javascript
console.log('we' - 2); // NaN
console.log(':(' * 2); // NaN
console.log('&9' / 2); // NaN
```

# Expressions within a string
As you've seen, it's possible to combine strings and numbers using the + operator, but there's another way to do this. Remember backticks? As well as allowing you to create a multi-line string, they also make it possible to insert a whole expression into a string. Under the hood, the result of the expression will be calculated, transformed into a string, and concatenated with the rest of the string's characters. Take a look at the below example:
```javascript
let a = 20;
let b = 5;
let result = `The result of ${a} + ${b} is ${a + b}`;

console.log(result); // The result of 20 + 5 is 25
```
Nice and easy! Notice that this is only possible when using backticks, not regular quotes. These are called template literals

