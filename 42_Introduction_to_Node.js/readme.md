JavaScript was originally developed as a language executed by browsers. However, in some situations, developers need to run some JS code outside of a browser, e.g., when they have to run the server-side of an application written in JS.

Fortunately, there is a special open-source tool for this purpose called Node.js. It's essential to master this tool to become a skilled JS developer.

# What is Node.js
Node.js represents a cross-platform runtime environment to execute JavaScript code outside of a browser. Node.js was created to write the server-side of web-sites. This is why it's most commonly used, but it can also be used to write desktop programs.

By itself, JS can't read files or work with the network outside of a browser. Node.js adds the ability for JS to interact with input/output devices. This platform is most commonly used to create web services that require an intensive exchange of information with their users, including the implementation of chat rooms, collaboration systems, social networks, etc.

Node.js was created in 2009 thanks to the software engineer Ryan Dahl. Node.js is based on the V8 engine. V8 is a program that converts Javascript code into a lower-level machine code, i.e. a code that can be understood by the processor. It is interesting to know that this engine was developed by a team from the Danish branch of Google and was used as the basis for the Chrome browser.

![image](https://user-images.githubusercontent.com/25152105/181431245-9692bfdf-efad-4c31-8067-5ad3f02e8699.png)

# Advantages
While JavaScript beats the competition in frontend development, in backend development the situation is more interesting. There are a lot of good languages for backend development and JS is competing with them.

So why work with Node.js? Here are the advantages to choosing server-side JavaScript for backend development:

- You use the same language on both the client side of the browser and on the server side. This increases the efficiency of the development process; it's possible to reuse code.
- Node.js is single-threaded and asynchronous, which provides high speed. That is, you don't have to wait until the previous task is finished to start the next one. You can read files, request data, and do other things at the same time.
- You can use npm, the biggest package manager. It's automatically installed with Node.js. It's used to download and upload packages from the npm cloud server. This allows programmers to avoid making the same bugs when working on new projects.


# Installing Node.js
Before you start using Node.js, you need to install it. This can be done at the official site. There you can find versions of Node.js for your operating system. The nodejs.org site gives you the option to install 2 categories of Node.js versions: LTS and Current.

![image](https://user-images.githubusercontent.com/25152105/181431601-3cce6f10-1ec8-46db-b58e-591d83e8d3c7.png)

LTS stands for Long Term Support. LTS versions are usually more stable because developers try not to try all kinds of new features when releasing them. Therefore, it's a good choice for commercial development. In contrast, Current versions are ahead of LTS in terms of functionality. This is a good choice when you are building a personal project or want to experiment with new features.

# Check Installation
To check if the correct version of Node.js is installed on your computer, you can type
node --version or node -v in the terminal.
```
node --version
v14.16.0
```
```
node -v
v14.16.0
```
If you get the version number after running the command, it means that your installation was successful and you can start using Node.js.

