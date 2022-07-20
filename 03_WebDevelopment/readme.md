Web development is the process of creating web applications or websites. One approach to creating a web application is to separate the logic into its server-side and client-side parts. This process usually involves developers with different specializations. Let's learn more about this aspect of web development.

# Frontend and backend development
It is customary to divide web development into two parts: frontend and backend.

Frontend development, also called client-side programming, is the development of the user interface (in other words, the visual part of web applications/sites) as well as writing the logic of interaction with users. Simply put, frontend development is responsible for everything users see when they open a web page and everything they interact with.

Backend development, also called server-side programming, is the development of the internal server side of the web application, the implementation of its logic. Backend development includes the things that users do not see, and what happens outside of their browser and computer.

![image](https://user-images.githubusercontent.com/25152105/179989413-f4eeae5b-6360-4b15-86f7-52e3671965a6.png)

# Developers
Usually, different specialists work on the frontend and backend development: frontend and backend developers, respectively. To better understand the difference between them, take a look at the examples of the tasks that these developers have.

- Frontend developers make web pages according to the layout received from the designer. They are responsible for the correct functioning and display of websites in different browsers and on different devices. Thanks to frontend developers, interactive elements appear on web pages.

- Backend developers write the basic business logic of an application, process user data, organize information storage in databases, implement data security and protection, optimize applications for maximum speed and scalability.
Also, there are people who are involved in all phases of web application development: from the creation of the client part to the implementation of the server part. Such programmers are called full-stack developers.

# Separation of client and server parts
Client-side and server-side are terms from web development that tell us where the application code is executed. But why do we separate the client and server parts? Why do we need the user interface representation and the service logic separated from each other? There are several reasons for this:

- We can independently replace the frontend and backend logic, minimizing the number of errors. For example, we can change how the site looks without modifying the common processes;
- We need a server to store and structure data;
- Data on the client's side may become outdated, but the server's answers are usually up-to-date;
- It's easier to manage data flows and orchestrate processes on a few servers than on millions of clients;
- Some tasks don't need an update from a server, it's faster to perform them locally.

# How do frontend and backend communicate
In order for a web service to work correctly, client and server parts must interact. This happens through HTTP requests. In the most basic variant, the interaction between frontend and backend happens as follows:

- The client sends a request to the server to retrieve or modify data using the HTTP protocol.
- Backend processes this request and returns the response via HTTP.
- Frontend receives the response and processes it, and then displays the result to a user.
The most popular format for exchanging data between client and server is JSON, but there do exist others. Markup languages help display the response from the server in a user-friendly way. The most commonly used markup languages are HTML and XML.

# Conclusion
In this topic, you've learned about how the web development process is roughly organized, why there is a division into the server and client parts, and how these parts interact with each other. Usually different specialists work on the server and client parts: backend and frontend developers. But there are also full stack developers a kind of universal developers who do both frontend and backend development. It's up to you which specialization you prefer.
