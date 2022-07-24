# Using ++ and -- in JavaScript
JavaScript has two opposite operations called increment (++) and decrement (--) to increase or decrease the value of a variable by one, respectively. For example:
```javascript
let a = 10;
let b = 10;
console.log(++a); // 11
console.log(--b); // 9
```
The code above actually gives the same result as the code below:
```javascript
let a = 10;
let b = 10;
console.log(a + 1); // 11
console.log(b - 1); // 9
```

# Prefix increment
Both increment and decrement operators have two forms that are very important when using the result in the current statement:

prefix (++n or --n) increases/decreases the value of a variable before it is used;
postfix (n++ or n--) increases/decreases the value of a variable after it is used.
Let's look at the prefix increment:
```javascript
let a = 4;
let b = ++a;
 
console.log(a); // 5
console.log(b); // 5
```
In this case, the value of a has been incremented and then assigned to b. Thus, b is 5.

# Postfix increment
Postfix increment increases or decreases the value of a variable after it is used. Consider an example:
```javascript
let a = 4;
let b = a++;

console.log(a); // 5
console.log(b); // 4
```
The Postfix operator first returns the value of a and only then the variable a is incremented.

That's why when we assign a++ to b, we actually assign 4 to b, only then a will be incremented. So, b is 4 and a is 5.

If that's still not clear enough for you, take a look at the code:
```javascript
let a = 4;
console.log(a++ + a); // 9
```
