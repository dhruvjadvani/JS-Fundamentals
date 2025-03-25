In programming, you sometimes need to generate random numbers. They can be used to access a random array element or in other instances where uncertainty is required. JavaScript has a special Math.random() method designed for these situations.

# How to generate a random number?
Math.random() returns a random floating-point number from 0 to 1 (the number is greater than or equal to 0, but less than 1).

This method is a part of the built-in Math object used for various mathematical operations.

Take a look at the examples below:
```javascript
console.log(Math.random()); // 0.5680051955123826 
console.log(Math.random()); // 0.40357719118239643
```

But what if we need to generate larger random numbers, such as from 0 to 10? To solve the problem, we can simply multiply the generated values by 10 or any other number which represents the maximum value:
```javascript
console.log(Math.random() * 10); // 3.4828303272733097
console.log(Math.random() * 25); // 24.893162695902227
```

# Generating random integers
If we go even further and try to generate an integer, we will need to use another helpful method from the Math object. Math.floor() rounds a number down to the nearest integer. So, if we combine these two methods, we can write a function for our purposes:

```javascript
function getRandomInteger(value) {
  return Math.floor(Math.random() * value);
}

console.log(getRandomInteger(5)); // 3
console.log(getRandomInteger(100)); // 42
```

# Minimum and maximum values
The approach in the previous section only produces positive numbers starting from zero. Imagine a situation where we need to have different minimum and maximum boundaries or even generate negative values. At this point, we have enough knowledge to generalize these ideas and make a proper random function.

To get numbers of any range, we need to pass two arguments representing the minimum and maximum possible values to our function. You can see the function's code below with some examples of the generated values:
```javascript
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomInteger(10, 20)); // 18
console.log(getRandomInteger(-5, 2)); // -1
```

# Accessing a random array element
Now let's consider a practical problem. We have a list of rock songs, and the musicians need to decide which one to play. Choosing the first song isn't an option. So, we need to select a random element from the array.
```javascript
const songs = ["Stairway to Heaven", "Imagine", "Yesterday", "Light My Fire"];
```
To access an array element, we use its index. This can be represented as a random integer that is less than the array's length. We already managed to produce random integers, so let's apply our knowledge to the concept of an array:
```javascript
function getRandomElement(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}

console.log(getRandomElement(songs)); // Imagine
console.log(getRandomElement(songs)); // Stairway to Heaven
```

