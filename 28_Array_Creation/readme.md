# Creating an Array

The simplest and most common way to create an array is with literal notation. Using this approach is similar to assigning a single value to a variable with the let or const keyword:
```javascript
// literal notation
let arr = [element_1, element_2, element_3, element_n];

let arr1 = ['JetBrains', 'Hyperskill'];
let arr2 = [45, 34, 23];
let arr3 = ['JavaScript', 12]; 
```

However, as you can see above, square brackets [] are placed around the array of elements. Also, strings stored in an array must be enclosed with either single '' or double quotes "".

Alternatively, you can use the new keyword with the Array() constructor to create Array objects. This approach enables you to pass a single number argument to the Array() constructor to specify its length. An array containing this number of empty slots will then be created:
```javascript
// Single argument
let arrayCreate = new Array(6);

console.log(arrayCreate.length) // 6
console.log(arrayCreate[0]) // undefined
```
If multiple arguments are passed to the Array() constructor, an array containing the given elements is created, as shown below:
```javascript
// Multiple arguments
let platforms = new Array('JetBrains', 'Hyperskill', 'WebStorm', 'PyCharm');

console.log(platforms.length); // 4
console.log(platforms[0]); // JetBrains
```
So, you can either use literal notation or the Array() constructor to initialize and store elements in an array.

# The fill() method
fill() is used to return a modified version of an array — it changes the array's elements to a static value. This method takes up to three arguments:

fill(value, start, end)

- value: the value the array will be filled with.
- start: the index where the filling should begin. This argument is optional, and its default value is 0.
- end: the index where the filling should finish. This argument is also optional, and its default is the array's length.
You can see some examples in the following code snippet:
```javascript
const myNumbers = [1, 4, 7, 10, 15];

// fill with 0 from position 1 until position 3
console.log(myNumbers.fill(0, 1, 3)); // [1, 0, 0, 10, 15]

console.log(myNumbers.fill(13)); // [13, 13, 13, 13, 13]

// fill with 5 from position 2
console.log(myNumbers.fill(5, 2)); // [13, 13, 5, 5, 5]
```
Now, let's create an array by using the new keyword and the fill() method together:
```javascript
let numberArray = new Array(6).fill(2); // [2, 2, 2, 2, 2, 2]
```
The above code will create an array with 6 slots and fill each one with the number 2.

**Make sure you declare and initialize the array before using the fill() method.**

# The from() method
The Array.from() method creates a new Array instance from an array-like or iterable object (such as a Map). The syntax of the from() method is as follows:

Array.from(object, mapFunction, thisValue)

- object: the object to convert to an array. This is a required field.
- mapFunction: the map function to call on each element of the array. This is an optional field.
- thisValue: a value to use as this when executing the mapFunction — also an optional field. 
Let's look at some examples that demonstrate how to create an array with Array.from().

Using a string:
```javascript
Array.from('Hello'); // ['H', 'e', 'l', 'l', 'o']
```
Using function arguments:
```javascript
function createArray() {
  return Array.from(arguments);
}

createArray(2, 4, 6); // [2, 4, 6]
```
Passing an arrow function to the mapFunction parameter:
```javascript
Array.from([3, 5, 7], x => x * x); // [9, 25, 49]
```
# The of() method
Array.of() was introduced in Javascript version ES6. It creates a new Array instance containing the given arguments, regardless of their type or number. The syntax of the of() method is Array.of(element_1, element_2, ..., element_n).

You can see some examples of how to create an array using Array.of() below:
```javascript
Array.of(15); // [15]

Array.of(101, 202, 303); // [101, 202, 303]

Array.of(undefined); // [undefined]
```
The difference between Array.of() and the Array constructor lies in the handling of integer arguments: Array.of(10) creates an array with a single element, 10, whereas Array(10) creates an array of ten undefined values.
