A loop is an action (a part of code) that is repeated a certain amount of times. The while loops keep going while a certain condition is true, for example, "while you are reading the topic", or "while it is raining". Some conditions are always true. For instance, if you write while (5 < 6), you will get an infinite loop, since 5 is always less than 6. Other conditions can be run only a finite number of iterations.

# While syntax
The while loop has the following syntax:
```
while (condition) {
...
}
```
It runs while the condition == true. Once the value in parentheses becomes false, the loop terminates.

Look at the following example:
```
let n = 2;
while (n < 100) {
    n = n * n;
    console.log(n);
}
```
Eventually, we get this answer:
```
4
16
256
```
How did it happen? Let's consider each step of the iteration in detail.

In the beginning, the variable n = 2. When we enter the while loop, we check straight away if the n < 100. The condition is still true, that is why we enter the loop. Afterwards, we square n and the product is displayed, which is how we get 4 in the first line.

At the second iteration, we again check the condition before entering the loop. 4 * 4 = 16: that's the second line. Since 16 < 100, we enter the loop for the third time, multiply 16 by 16 and get the result 256. Now, before we try to enter the loop for the fourth time, we notice that 256 is not less than 100, so the loop ends.

# Do...while syntax
There is another kind of loop which runs while the conditions are true: it is called the do...while loop. It has the following syntax:
```
do {
...
} while (condition);
```
The example above can be rewritten using the do...while construction:
```
let n = 2;
do {
    n = n * n;
    console.log(n);
} while (n < 100);
```
It is not hard to see that the conclusion will be just the same as it was with while:
```
4
16
256
```
So what is the difference between these, and why would we need two types of loops that work the same?

# While Vs do...while loops
Actually, there is a difference. The example below will help us spot it.
```
let n = 256;
while (n < 100) {
    n = n * n;
    console.log(n);
}
```
What will be displayed? That's right: nothing! The accuracy of the condition is checked before entering the loop. So what about do...while? Run the following code in the console:
```
let n = 256;
do {
    n = n * n;
    console.log(n);
} while (n < 100);
```
You'll see for yourself that the screen will display 65536!

So why does it happen? The thing is, in the case of do...while, the condition is checked after entering the loop and running the first iteration. This guarantees that the loop runs at least once, even if the condition is false from the beginning.


