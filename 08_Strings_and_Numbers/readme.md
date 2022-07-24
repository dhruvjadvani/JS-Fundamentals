Any information you want to use in scripts has its own type. This type describes how to store data in memory and what operations apply to it.

Let's draw an analogy: types can be represented by animal species or any other abstract attributes designed to group objects by some common feature. All the kittens and tomcats that you see are of the type cats, but each of them is a separate object. Thinking of cats as a type, you can assume some available operations, for example, a cat can purr.

In this topic, we will consider two simple data types which are often used in programming.

# Strings
When working with textual information in your program, you will have to use strings. This type of data is extremely common in JavaScript. Strings are written in single or double quotes.

- Examples of strings in double quotes:
```javascript
console.log("");             // empty string
console.log("string");       // one word
console.log("Hello, world"); // a phrase
```
- Examples of strings in single quotes:
```javascript
console.log('a');    // single character
console.log('1234'); // a sequence of digits
```
Note that any digits in quotes will also be considered a string.
As you can see, strings are very easy to use!

# Numbers
Numbers are the most important thing for any programmer. You will hardly be able to write a serious program without numbers, so let's see how to output a number to the console:
```javascript
console.log(12);
console.log(0); 
console.log(-11); 
console.log(-1.04); 
```
You can use positive, negative numbers, and zeros. There are no additional difficulties in recording floating-point numbers.

Integer numbers can be used to count physical objects, while floating-point numbers are a good choice for statistical and scientific calculations.

# typeof operator
We can easily recognize the data type using the typeof operator. Let's look at two examples to see how to output the data type to the console.

There are two ways to write this operator.

- With parentheses:
```javascript
console.log(typeof(9)); // number
```
- Without parentheses:
```javascript
console.log(typeof 9); // number
```
The result of these two code samples is the same: we want to find out what type of data 9 is, and it turns out to be a number.

This operator is especially useful when you are working with many different data types since JavaScript can automatically convert data types to each other.
