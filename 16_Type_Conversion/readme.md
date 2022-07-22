JavaScript supports automatic data type conversion. This means that the interpreter independently converts values to the type it expects to see in a particular part of your program. Such conversion is called implicit. At first glance, this might look useful, but sometimes such conversion may be confusing, leaving you to wonder why your code yields errors or behaves strangely. While programming, you will often find yourself in situations when you need to explicitly (that is, by yourself) indicate that you need to change the value of a certain data type.

# String conversion
String conversion occurs when you want to represent something as a string. The String() function must be applied to explicitly cast a value to a string. For example:
```
String(123);   // "123"
String(false); // "false"
String(-12.3); // "-12.3"
String(true);  // "true"
```
As you can see, the conversion is simple and intuitive.

In JS, the implicit conversion will be called by the binary + operator when one of the operands is a string:
```
"3" + 4                        // "34"
4 + ""                         // "4"
true + "detective"             // "truedetective"
"You are " + 25 + " years old" // "You are 25 years old"
```

Automatic conversion will take place regardless of the position of the operand string – on the right or the left side of the expression.

Remember the order of arithmetic operations. If there are several numbers before the string, these numbers will be added before the conversion:
```
3 + 10 + "1" // "131", not "3101"
```

Implicit conversion may be confusing, so be very attentive when writing programs.
