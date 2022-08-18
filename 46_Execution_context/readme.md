Execution Context is the most fundamental part of the JavaScript programming language as it describes the internal workings of a JavaScript code. In layman terms, the execution context represents the environment in which our codes run. So there are basically 3 different types of Execution Contexts:

- Global Execution Context
- Local Execution Context
- Eval Execution Context


# Execution Context
An execution context is similar to a container that stores variables, and the code gets evaluated and executed. Thus, it is the execution context that provides an environment for the specific code to get executed. It decides which code section has access to the functions, objects, and variables used in the code.

In JS, we have different types of code, i.e the code is in a global context, local context, or in eval function. Each of these different types of code is evaluated within a dedicated execution context.

# How Execution Context is formed?
To understand the internal workings of the Global Execution context it's important to know how the execution context is created. So, every time an execution context is created, it happens in two phases:

- The Creation Phase
- The Execution Phase

The Creation phase begins when an execution context is created but before the code runs. For example, a function call. When you call a function, you might think the code immediately runs it, but, in reality, the Creation phase starts but the code doesn’t actually execute it.

We can think of the Creation phase as a form of a template. At the Creation phase, a template is created, and at the Execution phase, the template is filled with relevant information. What is this template? During the Creation phase the engine scans the code, and every time it comes across a declaration of a variable or a function, it saves the variables without their actual value (except function arguments, where the value is saved). Then at the Execution phase, the engine will run over that template and execute each relevant part. This process repeats itself every time a new execution context is created.

# Global Execution Context
GEC or Global Execution Context is the default execution context created when the file loads in the browser. Any JS code which does not belong to any function will be present in the global execution context. **As the JS engine is single-threaded, there can't be more than one GEC, because only one global environment is possible for JS code execution.**

When the JavaScript engine starts executing a JavaScript file (that is as the javascript engine starts to read our code) it creates an execution context even if there is no code to execute in the JavaScript file.

# window and this
GEC is also called the base execution context. It creates 2 special things. A global object called window for the browser (If you use JavaScript at the server-side or NodeJS, it won't be the window object.) and a global variable called this. The value of this points to an object to which the current code is being executed.

Once you load the HTML on the browser, there will not be any JavaScript code loaded and executed. If you open the debugger console (F12 for Chrome) and type this, you will see something called this created for you already.

![image](https://user-images.githubusercontent.com/25152105/185303741-63852359-ef04-49ac-9d89-7fc6be5a93b9.png)

Now, try typing window. This time you will have the window object value printed:

![image](https://user-images.githubusercontent.com/25152105/185303793-184ab0cd-7f0f-4f6a-9156-b529c8498c45.png)

Did you notice that the window object and this variable are equal in the Global Execution Context? You can confirm this in the console too.
```javascript
this === window // true
```
Now let's add some code to the JavaScript file now.
```javascript
var name = 'Hyperskill';

function sayName() {
  console.log(this.name); 
}
```

What do you think will happen to the Global Execution Context now? Let's see what will happen in the Creation phase and Execution phase that you've studied above.

**At the time of the Creation phase:**

Memory gets allocated for name and sayName(). name gets initialized by a special value called undefined. The sayName() function gets placed directly into the memory. The JS engine will store the function definition in the heap memory and, after that, will set up a property that will point to that specific heap memory location. It does not matter what is stored in the function, it just points to its location.

![image](https://user-images.githubusercontent.com/25152105/185304211-864c559e-6036-49cf-a5b3-b0410bb43a85.png)

**At the time of the Execution Phase:**

Now, at the end of the line, no code is left, the JS engine moves to the Execution phase to scan the function once more. Here the variable value set by the user is Hyperskill, so it adds this property and initializes the variable in GEC by Hyperskill.

![image](https://user-images.githubusercontent.com/25152105/185304310-4c91b8c5-d724-42ec-95e1-3fa9fde3a37a.png)

https://ui.dev/javascript-visualizer

# Local Execution Context
Every time a function is executed, a new execution context is created for that function called local execution context or function execution context (FEC). So every function has an execution context of its own which is created when the code is calling the function, and not before that. Unlike GEC, there can be more than one Local Execution Context. Also, the local execution context can access the entire code of the GEC, but it is not possible for GEC to access all the code of the FEC.

# Eval Execution Context
Any JS code that gets executed within the eval function creates and holds its own execution context. However, the eval function is not used by the JavaScript developers, but it is a part of the Execution Context.

# Execution Context Stack
At the bottom of the execution stack resides GEC. It is present by default in the stack. So, when beginning a JS code execution (i.e., during GEC execution), when any function is present in the code, and the JS engine searches it, it instantly creates a function execution context for that function and pushes it to the top of the execution context stack.

Let's take a look at an example to better understand it:
```javascript
function firstFunc() {
    console.log('Executing first function');
    secondFunc();
}

function secondFunc() {
    console.log('Executing second function');
}

firstFunc();
```

Here's how it will look in the Execution Context Stack. Firstly all the code is loaded into the browser. After that the JS engine pushes/inserts the GEC at the top of the execution stack. As soon as the JS engine encounters the first function call( firstFunc() ), it sets up a new local execution context and adds it to the top of the current execution stack. Now, as secondFunc()is invoked within the firstFunc(), the JS engine sets up a new local execution context for the second function and inserts it at the top of the stack.

![image](https://user-images.githubusercontent.com/25152105/185305503-101681b1-dcdf-4c4c-b286-44aa7e13efc2.png)

When the second function is completed, the execution function is popped out of the stack, and controls move to the next execution context present in the stack(). When the first function gets executed completely, the execution stack of the first function pops out of the stack. Hence, the control reaches back to the GEC of the code. At last, when the entire code is executed, the JS engine removes the GEC from the current stack.

# Conclusion
Understanding the execution context lets you know the reasons why your code is evaluating different values that you had not initially expected. The Execution Context and the phases (Creation phase and Execution phase) are important concepts to get familiar with. These topics will help build a stronger foundation for learning JavaScript. Moreover, this will help you better understand such topics like Closure, Hoisting, Asynchronous functions, and many more.
