As you know, each variable has a unique name that identifies it among other variables. Setting a good variable name may not be as easy as it seems. Experienced developers pay a lot of attention to names to make their programs easy to understand. It is important because programmers spend a lot of time reading and understanding code written by other developers. If the variables aren't named well, then even your own code may seem unclear to you after a few months. This is not good, because programming is not only about writing programs, but also about their further support and development.


# Restrictions
There are no specific requirements for characters that can be used in JavaScript to create names. However, there are two restrictions that you can easily remember: a name can only consist of letters, numbers, and symbols _, $; and it shouldn't start with a digit.

Look at the examples below:
```
let $testName; // right
let testName;  // right
let test_name; // right
let test18;    // right
let test;      // right

let 18test;    // wrong
let test-name; // wrong
```
A hyphen - is not a valid character for variable names in JS.

In JS, the case of the characters matters, so firstName and firstname will be different variables.

# Reserved names
Reserved names cannot be used when selecting a variable name. These are words that already perform specific functions in Javascript. These words include: let, const, return, and function. The complete list of words that are reserved can be found on MDN.

The code below returns a syntactical error:
```
let const = 5;          // error
let return = "apple";   // error 
```
# Naming conventions for variables
In addition, there are the following conventions for naming variables:

- The variable name must be readable, descriptive, and it should explain to the reader what sort of values it stores. For example:
```
let count;  // good name
let n;      // bad name
```
Coming up with such names — short and precise — becomes easier with experience, but only if you put some work in it.

- Despite the validity of the underscore _ symbol, most style guides recommend opting for camelCase to write a name consisting of several words. camelCase is a way of writing phrases where each new word in the middle of the phrase begins with a capital letter, without intermediate spaces or punctuation marks:
```
let serverMessage; // the variable name is written according to camelCase practice
```
**These conventions are optional, but it is strongly recommended to follow them.**
