# Commands with parameters
Sometimes using just one command is not enough. Let's take a look at the command mkdir, which is used to create a new folder in the current directory. If you try to use it as it is, you will get an error. The terminal needs to know how to name a new folder! That's where parameters come in handy. A parameter is some additional information that you give to the command. Simply put, parameters are variables that commands can take.

Now, type the command mkdir with a parameter papers. We use this command to create a folder named papers:
```
C:\users\student> mkdir papers
```
Although the current directory stays the same, if you follow this path, you will see that the new folder papers was created in the student directory.

All examples in this topic are for Windows OS, but the listed commands are relevant for Linux and macOS too. Note that the path separator in Windows is a backslash but in Linux/macOS it's a forward slash.

Now let's change our location and go to the folder you've just created! Use the cd command with the path to the papers folder as a parameter.
```
C:\users\student> cd C:\users\student\papers
C:\users\student\papers>
```
Another useful parameter of the cd command is .. It allows you to go to the parent directory, the directory one level above the current one.
```
C:\users\student\papers> cd ..
C:\users\student>
```
You can also go back to the root folder, a top-level directory in the file system. To go back to the root directory, you can use the/parameter:
```
C:\users\student> cd /
C:\
```
Thanks to commands and parameters, it seems like we are back to the roots! Actually, without parameters, most commands would be useless.

# Options
If you google anything about commands and a terminal, you'll encounter the term "options". Don't be afraid of it! Let's briefly explore what it means.

Options, as the name suggests, are usually optional and are used to somehow change the common behavior of the command. If you use Windows and are already sick and tired of exploring the current drive, you can change it by adding the /d option to cd. Don't forget to set the path you want to follow as the parameter, for example, F:\Codepen snippets:
```
C:\users\student\Desktop> cd /d F:\Codepen snippets
F:\Codepen snippets>
```

To sum up: what are essentially options and parameters? Both of them are just two particular types of arguments. While an option changes the behavior of a command, a parameter is used to assign information to either a command or one of its options. One of the key differences between them is that the number of possible values in options is limited and locked in the code, while with parameters users have more freedom as they don't have such limitations.

# Help Manual
No one can remember all the existing commands, options, and parameters. Don't worry about that. The help command is there for you. Type it in Windows, and you will get a list of commands available to you.

For Linux and macOS, a way to get information about the commands depends on the shell you use. The simplest way for Linux is a--help flag. There is also the man command, short for manual. You can use it similar to the help command in Windows: man mkdir.

That's not all. The help command can take any command as a parameter and return all the available options. Let's try. We will use the simplest command we've learned so far, the cd command.
```
C:\users\student> help cd

Displays the name of or changes the current directory.
 
CD [/D] [drive:][path]
CD [..]

   ..  Specifies that you want to change to the parent directory.

Type CD drive: to display the current directory in the specified drive.
Type CD without parameters to display the current drive and directory.

Use the /D switch to change the current drive in addition to changing the current directory for a drive.

<...>
```
As you can see, these are all the details you need to know about the cd command. We call this description the help manual.

Let's discuss what the help manual includes. First, it states what the command is supposed to do. For cd command, it reads, "Displays the name of or changes the current directory". Then it returns all the combinations of that command along with all possible parameters that you can use. You can also notice that in Windows commands are case insensitive unlike in Linux and macOS. Let's look at the example from the manual:

CD [/D] [drive:][path]
So, the above command has three parts. CD is the command name. [/D] is an option, and [drive:][path] is a parameter. You might wonder what these [] brackets mean. Well, they are just notation that means that the parameters are optional to the commands. You shouldn't add these brackets when you use commands.


Now you see that with options and parameters you can transform a simple command into something complicated.
