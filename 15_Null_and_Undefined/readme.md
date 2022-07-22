In JavaScript, there are two special data types to indicate the absence of a value: null and undefined. 

# null
null means that the variable was explicitly assigned an empty or non-existent value. If the variable is null, we know that it does not contain an acceptable number, string or other data type:
```
let name = null; 
console.log(name); // null
```
The example above shows that the variable name is unknown or for some reason does not have a value.

# undefined
The undefined value is returned when a variable was declared, but its value wasn't set. Let's consider the following example:
```
let count; 
console.log(count); // undefined 
```
Here, as expected, the undefined value was output to the console.

undefined may also occur in cases when object properties do not exist:
```
let person = {
  age: 27
};

console.log(person.name); // undefined
```
In this case, undefined is returned because we tried to output to the console a property name that wasn't specified in our object.

But that's not all! The undefined value is also returned when a function has a missing parameter:
```
function getDetails(a) {
  console.log(a);
}

getDetails(); // undefined
```
In the example above, undefined is printed because the parameter a was missing in the written function.

# Check the data types
null and undefined literally mean "no value", but they have different data types:
```
console.log(typeof null);       // object
console.log(typeof undefined);  // undefined
```
You expected that type null would return null, didn't you?

You were right if you thought so. In fact, null is not an object, but a separate data type. This strange behavior is an officially recognized error in the language. The mistake has existed for several decades. The reason no one fixes it is that thousands of sites created in JavaScript depend on this kind of wrong behavior. Fixing this bug can lead to many sites and popular web applications crashing. That's why we have nothing else to do but remember this peculiarity of the language and take it into account when writing scripts.
