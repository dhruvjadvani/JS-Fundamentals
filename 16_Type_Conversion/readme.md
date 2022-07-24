JavaScript supports automatic data type conversion. This means that the interpreter independently converts values to the type it expects to see in a particular part of your program. Such conversion is called implicit. At first glance, this might look useful, but sometimes such conversion may be confusing, leaving you to wonder why your code yields errors or behaves strangely. While programming, you will often find yourself in situations when you need to explicitly (that is, by yourself) indicate that you need to change the value of a certain data type.

# String conversion
String conversion occurs when you want to represent something as a string. The String() function must be applied to explicitly cast a value to a string. For example:
```javascript
String(123);   // "123"
String(false); // "false"
String(-12.3); // "-12.3"
String(true);  // "true"
```
As you can see, the conversion is simple and intuitive.

In JS, the implicit conversion will be called by the binary + operator when one of the operands is a string:
```javascript
"3" + 4                        // "34"
4 + ""                         // "4"
true + "detective"             // "truedetective"
"You are " + 25 + " years old" // "You are 25 years old"
```

Automatic conversion will take place regardless of the position of the operand string – on the right or the left side of the expression.

Remember the order of arithmetic operations. If there are several numbers before the string, these numbers will be added before the conversion:
```javascript
3 + 10 + "1" // "131", not "3101"
```

Implicit conversion may be confusing, so be very attentive when writing programs.

# Numeric conversion
Numeric conversion occurs when you want to represent something as a number. To perform an explicit conversion, apply the Number() function:
```javascript
Number("1");    // 1
Number(" 37 "); // 37
Number("");     // 0
Number("\n3");  // 3
Number("\n");   // 0
Number("\t");   // 0
Number(true);   // 1
Number(false);  // 0
```
When converting a string to a number, spaces and \n and \t characters at the beginning and the end of the string are cut off. If the string turns out to be empty, the result will be 0. The boolean type behaves as expected: false turns into 0 and true turns into 1.

Not all values can be converted into numbers. The result of the incorrect conversion attempts is NaN, which means Not-a-Number. For example, Number("apple") will return a NaN value.
Implicit conversion is a little more confusing. It occurs in almost all mathematical functions and expressions:
```javascript
true + 43 // 44
3 - false // 3
10 / "5"  // 2
-true     // -1
+"85"     // 85
```
To be explicitly converted into a number, the string must be a correct number as well.

Also, remember that the binary plus cannot turn a string into a number, while the Number() function can. So the result of the expression "5" + 7 will be a string, and the result of Number("5" + 7) will be a number.

# Boolean conversion
Boolean conversion occurs when you want to represent something as a boolean. To explicitly convert data into a boolean value, the Boolean() function should be applied:
```javascript
Boolean(1);            // true
Boolean(0);            // false
Boolean("Am I nice?"); // true
Boolean("");           // false  
```
The rules for using this function are simple. The following values give the false value as the result of conversion: false, undefined, null, 0, NaN, and "". The conversion of all other values will give the true value.

Implicit conversion occurs when using logical operators (||, &&, and !):
```javascript
!!3                      // true
0 || "go"                // "go"
"Master" && "Margarita"  // "Margarita"
```
Implicit conversion with || and && operators occurs under the hood and eventually returns the original value of one of the operators.
