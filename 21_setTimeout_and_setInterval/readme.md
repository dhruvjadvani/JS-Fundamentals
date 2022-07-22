When writing scripts with two lines, we assume that the browser will execute the second line after the first. However, some situations ask for a different approach: for example, what if you want to show an ad only after the user has spent 5 seconds on your website? Let's take a closer look at how to control the functions in situations like that.

# setTimeout
Imagine you have a shopping list, but you don't want to go to the store immediately. You plan to do it in an hour, after you have watched a movie. If we put it in programming terms, you have a function called "buy food" that you want to execute after 60 minutes.

In the JavaScript world, we would say that you are "scheduling a call": you have already written the code and want to launch it at a specific time.

One of the methods to help with scheduling a call is setTimeout. It doesn't run instantly: setTimeout is executed only after a specific period of time. Look at the example for an advertising message that is showed after 5 seconds:

```
setTimeout(function() {
  console.log("Welcome to our website! You have a special discount today!");
}, 5000)
```
Here is another way to write setTimeout. As you see, we call a function named welcome instead of an anonymous function:
```
function welcome(name) {
  console.log(name + ", welcome to our website! You have a special discount today!");
}
let userWelcomeMessage = setTimeout(welcome, 5000, "Mary");
```
Let's look at the variables of the setTimeout method:

- function() {console.log(`…`)}: the function to call after the delay;
- 5000: the delay period in milliseconds (1000 ms = 1 second), that is, the time after which the function is executed.
- Mary: an argument for the welcome function;
The text "Mary" goes to the welcome function as the name variable, and we will see the message "Mary, welcome to our website! You have a special discount today!" in 5 seconds as a result. You can pass more than one argument to a function by adding additional variables to the setTimeout method.

# Zero delays setTimeout
Let’s consider another case with the setTimeout method. Here's our example:
```
setTimeout(function() {
  console.log("Welcome to our website!");
}, 5000)
```
Now, what happens if we change the delay variable to zero or delete it?
```
function welcome() {
  console.log("Welcome to our website!");
}

setTimeout(welcome, 0)
```
The function will be executed immediately, without delay. However, you should remember that if another function is written after it, it will be executed first. Let's consider an example to better understand it:
```
function welcome() {
  console.log("Welcome to our website!");
}

setTimeout(welcome, 0)

console.log("2nd of May");
```
The browser calls setTimeout only after the function console.log is executed. The welcome() function is placed in the queue and launched after the current code is complete. As a result, the user will see "2nd of May" first and only then "Welcome to our website!".




