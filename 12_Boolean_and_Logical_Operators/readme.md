# Boolean type
There are statements about which we can say whether they are true or not. Imagine that it is raining today, so the statement "it is raining" is true. The statement "5 < 3" is always false, and "the Moon orbits the Earth" is true. These statements have a special type – logical, or boolean.

There are only two possible values of boolean variables: true and false. Look at the example of setting a boolean variable and printing it:
```javascript
let bool = true;
console.log(bool); // true
```

# Logical operators
In order to perform operations with the boolean variables, logical operators are used. There are only three of them in JavaScript: logical AND (&&), logical OR (||), and NOT (!). The first two operators are binary, which means that they're used with two operands, and the ! operator is unary, so it only takes one operand. && returns true if both operands are true and false in all other cases:
```javascript
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false
```
|| returns false if both operands are false and true in all other cases:
```javascript
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false
```
! returns false to true and true to false:
```javascript
console.log(!false);  // true
console.log(!true);   // false
console.log(!!true);  // true
```

# More capabilities of logical operators in JS
Actually, logical operators in JavaScript have much wider capabilities than the traditional usage described above. Their operands can be not only the logical variables but also variables of other types.

Among the numerical values, 0 is considered false, and all other numbers are true. All strings except the empty ones are considered true.

Expressions are always calculated from left to right. && returns false as soon as it finds the first occurring false, and the operator || returns true as soon as it sees the first true:
```javascript
console.log(true || 0);      // true
console.log(false && "sun"); // false
console.log(1 || 0);         // 1
```

# Priority
When working with complex expressions, you should take into account their priority. The priority of ! is higher than that of &&, and the priority of && is higher than that of ||. If you need to change the priority, use parentheses:
```javascript
console.log(!false && !true);   // false
console.log(!(false && !true)); // true
```
