# Creating an Array

The simplest and most common way to create an array is with literal notation. Using this approach is similar to assigning a single value to a variable with the let or const keyword:
```
// literal notation
let arr = [element_1, element_2, element_3, element_n];

let arr1 = ['JetBrains', 'Hyperskill'];
let arr2 = [45, 34, 23];
let arr3 = ['JavaScript', 12]; 
```

However, as you can see above, square brackets [] are placed around the array of elements. Also, strings stored in an array must be enclosed with either single '' or double quotes "".

Alternatively, you can use the new keyword with the Array() constructor to create Array objects. This approach enables you to pass a single number argument to the Array() constructor to specify its length. An array containing this number of empty slots will then be created:
```
// Single argument
let arrayCreate = new Array(6);

console.log(arrayCreate.length) // 6
console.log(arrayCreate[0]) // undefined
```
