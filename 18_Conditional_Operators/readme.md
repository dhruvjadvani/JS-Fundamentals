# Conditional operators
Until now, we’ve only considered programs that execute commands line by line. But in real programming, they may look like a crossroad:
![image](https://user-images.githubusercontent.com/25152105/180436619-d09f2a57-068f-4aa5-a2e7-f1e46878e3f7.png)

In life, we sometimes find ourselves at a crossroads where our path forks and splits in two. This happens in programming too: programs may fork. In these cases we use conditional operators.

# The "if" statement
Often we need to make a decision based on some conditions. In programming and JavaScript particularly, this concept is realized with the help of the if statement. It’s called a conditional operator. For example, imagine you have a cat that meows when it gets hungry after 6 am. We can write a statement:
```
function meow() {
  return "Meow!";
}

let time = 10;
let sound;

if (time >= 6) {
  sound = meow();
  console.log(sound);
}
```
In the function meow() we describe what the cat does every time it is after 6 am.

Note that when we work with the if statement, the condition inside the parentheses is converted to a boolean. The code inside if is executed if the boolean is true. So every boolean could be a condition:
```
let condition = true; 

if (condition) {
  console.log("True!");
}
```
