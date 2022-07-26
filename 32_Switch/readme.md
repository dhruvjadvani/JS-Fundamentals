# Switch syntax
Imagine you are helping to write a program for a train ticket app. You need to show the ticket price, which varies depending on the person's destination. Using the if operator, you can do it like this:
```javascript
const cityTo = "Paris";

if (cityTo === "Berlin") {
  console.log("The price is $100");
} else if (cityTo === "Paris") {
  console.log("The price is $120");
} else(cityTo === "London") {
  console.log("The price in $150");
}
```
As a result, you will see the text "The price is $120" in the console.

Even though there aren't too many destination options, the example above is still difficult to read and repetitive. It is not the best idea to process values using the if operator: in such cases, it is better to use the switch operator:
```javascript
const cityTo = "Paris";

switch (cityTo) {
  case "Berlin":
    console.log("The price is $100");
    break;
  case "Paris":
    console.log("The price is $120");
    break;
  case "London":
    console.log("The price is $150");
    break;
}
```
The result will be the same.

The switch statement is used to perform specific actions depending on the value of the variable. It matches the value or expression in the parentheses (cityTo) with each case clause ("Berlin", "Paris", and "London"). If the case clause is equal to the expression, the corresponding operator is executed (shown "The price is $120" in the console). For each case, the operator checks the value in strict equality using type checking.


# Processing similar cases
Let's say that the prices for a ticket to London and a ticket to Rome are the same. Now you can combine these cases to handle them together:
```javascript
const cityTo = "Rome";

switch (cityTo) {
  case "Berlin":
    console.log("The price is $100");
    break;
  case "Paris":
    console.log("The price is $120");
    break;
  case "London":
  case "Rome":
    console.log("The price is $150");
    break;
}
```
As a result, for both London and Rome you will see the text "The price is $150" in the console.

What if you have the same price for all cities except Berlin, Paris, and London? It would be strange to list the names of all these cities with identical prices. In this situation, it is better to use the default case of the switch statement. Here's an example:
```javascript
switch (cityTo) {
  case "Berlin":
    console.log("The price is $100");
    break;
  case "Paris":
    console.log("The price is $120");
    break;
  case "London":
    console.log("The price is $150");
    break;
  default:
    console.log("The price is $90");
    break;
}
```
If cityTo is equal to Berlin, you will get a message "The price is $100" in the console, just like before. If cityTo contains "Stockholm ", "Athens", or "Helsinki", you will see "The price is $90".

This way, the default case works if a few cases don't match. The default case can be placed in any part of the switch statement, but by convention it is better to add it to the last clause.
