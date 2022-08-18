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



