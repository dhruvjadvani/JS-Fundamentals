# Hello, World!
When learning any programming language, it is a kind of a tradition to start with writing a program that displays a message "Hello, World!" on the screen or on another device. And who are we to break traditions?
```
console.log("Hello, World!");
```
You may run this code: just copy it and click on the triangle. You should get this result:
```
Hello, World!
```
As you can see, the script consists of one line and simply prints the text passed in brackets. Note that the quotes are also ignored when outputting the result. This code is very simple but deserves a detailed review.

# Explanation
Here console.log is a function. A function is a block of code that performs useful work for you, such as printing text. In a way, a function is a subroutine that can be reused in your programs. When a function name is followed by parentheses, it means that it has been called to get the result. console.log allows you to output information to the console, so this function is often used to find errors in the code.

Moving on. "Hello, World!" is a string. All strings in JavaScript are enclosed in single or double quotes, so 'Hello, World!' would also be a valid string. See for yourself – try to run the following code:

```
console.log('JavaScript');
```
The program will print:
```
JavaScript
```

# Printing quotes
If you want to include quotes in a string, there are two ways to avoid confusion and successfully print them:
- You can quote this line in other types of quotes, for example:
```
console.log("Yes, I'm ready to learn JS.");
```
- Or put a backslash (\) before the quotation marks:
```
console.log('Yes, I\'m ready to learn JS.');
```
The result of both will be as follows:
```
Yes, I'm ready to learn JS.
```

# Possible errors
Errors happen even in simple code lines. The most common errors are:
- misprints
```
consle.log("Hello, World!");
```
This line contains consle.log instead of console.log. This code will not work because of a misprint.
- missing one or both quotation marks for a string
```
console.log("JavaScript);
```
This does not work because of missing closing quotes.
