In JavaScript, it is possible to compare different types of data. The execution of such operations always returns the value of the logical type: true or false.

# Comparison operators list
There are several specific comparison operators in JS, but you probably know most of them from school math: greater than >, less than <, greater than or equal >=, less than or equal <= , equal ==, not equal !=, strict equal ===, and strict not equal !==.

**Note that double and triple equality marks are used for comparison. A single sign of equality would mean an assignment.**

# Numbers
Comparison operations between numbers are quite intuitive:
```
console.log(5 > 3);   // true
console.log(4 < 2);   // false
console.log(7 == 6);  // false
console.log(7 != 6);  // true
```
They're unlikely to cause you much trouble.

# Strings
In Javascript, you can compare not only numbers but also other types of data. For example, strings. Strings are compared to letters; the greater one is the string whose letter comes later in the Unicode character list:
```
console.log("A" == "A");             // true
console.log("A" != "Z");             // true
console.log("Z" > "A");              // true
console.log("colorful" > "color");   // true
console.log("Dog" > "Bird");         // true
console.log("z" > "Z");              // true
```

# Different types
When you need to compare different types of data to a number, JavaScript reduces each type of data to a number:
```
console.log("10" > 5);    // true
console.log(14 == "14");  // true
```
The logical value true in such cases becomes 1, and false is considered 0.
```
console.log(true == 1);   // true
console.log(false == 0);  // true
```

# Strict equal and strict not equal
In the end, we should consider strict equal === and strict not equal !==. They differ from common operators equal == and not equal != in that they compare not only values but data types as well:
```
console.log("15" === 15);         // false
console.log("15" == 15);          // true 
console.log(true === 1);          // false
console.log(true == 1);           // true
console.log(null === undefined);  // false
console.log(null == undefined);   // true 
```
# null, 0, and undefined
There are several exceptions in all the considered algorithms of how operators work. For example, null behaves strangely in terms of mathematics when compared to 0:
```
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true
```
Also, any comparison of undefined with 0 is always false:
```
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined <= 0); // false
```
JS has another strange rule: undefined can only equal null and nothing more:
```
console.log(undefined == null);  // true 
console.log(undefined == 0);     // false
```
