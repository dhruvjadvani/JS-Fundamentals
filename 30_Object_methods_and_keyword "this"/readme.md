When writing scripts, we usually need to create objects to present something from the real world: users, products, maps, and more. In real life, it is possible to consider the products in detail or put something in a shopping cart; it's also an option in programming. Such actions in JavaScript are available thanks to object methods, meaning the functions you can use as object properties.

# Object method creation
Let's try to understand how object methods are created. To do this, consider the following example:
```
let product = {
  name: "Microwave",
  description: "With oven mode",
  price: 398
};

product.giveDiscount = function() {
  console.log("You have a 10% discount!");
};

product.giveDiscount(); // You have a 10% discount!
```

In this code, we have allowed the object to report a discount on the product by writing the method giveDiscount.

# Shortened recording
There's a shorter way of setting functions as properties. For example:
```
let person = {
  greetings: function() {
    console.log("Hello");
  }
};
```
We can also skip the keyword function:
```
let person = {
  greetings() {
    console.log("Hello");
  }
};
```
Shortened syntax not only saves you time but also makes the code more readable.

# "this" keyword
In natural language, we can point to a specific person, animal, or object using pronouns. In JavaScript you may just as well refer to a specific object using the keyword this:
```
let user = {
  firstName: "Elliot",
  lastName: "Alderson",
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}; 

console.log(user.fullName()); // Elliot Alderson
```

In the above example, with the help of this, the fullName function has accessed the firstName and lastName information stored in the user object, because it is declared inside it.

**Applying this to nested objects can create some confusion. In such situations, you should keep it in mind that the keyword this refers to the object in whose method it is used.**

