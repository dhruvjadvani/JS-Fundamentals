# What is forEach
Let's say you have an array of names: arrayNames = ["Mike", "Alex", "Asya"]. You want to show each element through the console.log. As you remember, you can do this using the index:
``
console.log(arrayNames[0]);
console.log(arrayNames[1]);
```
Now let's imagine that you have an array of a hundred elements, or you don't even know how many elements there are. How do you print all the elements in this case?

The best way to do this is the forEach method. It reads each element of the array sequentially and performs the same action with it. We can use it to display each element of the array via the console.log:
```
arrayNames.forEach(console.log);
```
As a result, console.log first shows the name "Mike", then "Alex", and finally, "Asya".

The main feature of forEach is the sequential processing of each array element. It reads the elements one by one and can't go any further without performing the necessary actions with the previous one.

The method skips the elements that were deleted or not initialized. For example, if we change arrayNames to arrayNames = ["Mike",, "Asya"], we will only see two strings, "Mike" and "Asya".

# Syntax
In the previous example, we passed the console.log function to the forEach method, but you can also replace it with a custom function. The forEach method has two arguments:

1. callback — a function to be executed for each element (for example, console.log like in the previous case). Callback has three parameters:

- currentValue: the element we are currently processing;
- index: the index of the currentValue element;
- array: the array for which we called forEach.
2. thisArg — a value that we can use as this in the callback function.

Here is an example:
```
const arrayFruit = ["pineapples", "oranges", "apples"];
arrayFruit.forEach(function(value) {
  console.log("Today I ate" + value);
});
```
The result will be:
```
"Today I ate pineapples"
"Today I ate oranges"
"Today I ate apples"
```
We used the first argument (currentValue) inside the callback to display the value of the current element. As a result, we have three different phrases, the last words of which correspond to the elements of the array Fruit.
