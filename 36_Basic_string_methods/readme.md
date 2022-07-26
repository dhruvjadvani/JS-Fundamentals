# The slice method
In JavaScript, the slice() method is used to take out/extract a part of the string and return a new string. It accepts the start index and end index as parameters to specify what part of the string is to be extracted. **The slice method does not change the original string and hence returns a new string.** The syntax of the slice() method is the following:
```
string.slice(start, end);
```

The above syntax consists of the following:

- string, the string on which the slice method is used to extract a part of the string.
- start, starting index from which the slice method starts to extract the string.
- end (optional), ending index up to which the slice method extracts the string.
Consider an example in which you need to extract the second-level domain. Typically, a second-level domain comes after "@" in an email. For example, in "abc@xyz.com" a second-level domain is "xyz".
```javascript
let email = "hyperskill@gmail.com";
email.slice(11, 16); // 'gmail'

let text = "She sells seashells on the sea shore.";
text.slice(1, 4); 'he '

let str = "I am learning string methods."
str.slice(-8); // 'methods.'

let newStr = "JavaScript";
newStr.slice(-6, -1); // 'Scrip'
```

**The negative index, i.e -1, in the parameter indicates that the extraction of the string starts from the end of the string.**

# The split method
The split() method splits the string into an array of substrings and returns an array of substrings. This method accepts a parameter and based on this parameter the string is split into substrings and a new array is formed. The syntax of the split() method looks like this:
```
string.split(separator, limit);
```
The above syntax consists of the following:
- string, a string to which the split method is applied.
- separator (optional). It can be a simple string or a regular expression. The separator specifies the point from which separation takes place. If the separator is not present, then the entire string becomes an element of a single array. If the separator has multiple characters, then the sequence of the entire character is found to split.
- limit (optional), a non-negative integer that specifies the number of splits. If a limit is passed to the split method, it will split the string into the specified number of substrings. After the number substrings reaches the limit, the method stops.
Let's take a look at an example to better understand the split() method.

```
let numbers = "123,456,789";

// separator is ","
let splitNumbers = numbers.split(",");  
console.log(splitNumbers); // [ '123', '456', '789' ]


let text = "jetbrains@gmail.com";

// separator is "@"
let splitText = text.split("@"); 
console.log(splitText); // [ 'jetbrains', 'gmail.com' ]
```
As seen in the examples above, the string gets split where the separator occurs and returns an array of strings. Let's see more examples in which limit is also passed to the split method.
```
let languages = "JavaScript, Java, C++, C, Python, Kotlin";

// separator is "," and limit is "3"
let splitLang = languages.split(",", 3); 
console.log(splitLang); // [ 'JavaScript', ' Java', ' C++' ]


let text = "JetBrains";

// separator is empty string
let textSplit = text.split("", 5); 
console.log(textSplit); // ['J', 'e', 't', 'B', 'r']
```
Let's include some Regexp in the separator and see how the split method works.
```
let numbers = "2, 4, 6, 8, 10";

// separator is a regexp 
let splitNumbers = numbers.split(/\s*,\s*/);
console.log(splitNumbers); // ['2', '4', '6', '8', '10']


let text = "box, beatbox, boxer, boxing, postbox, box-sizing";

// separator is a regexp and limit is "4"
let regexp = /\bbox/
let splitText = text.split(regexp, 4);
console.log(splitText); // [ '', ', beatbox, ', 'er, ', 'ing, postbox, ' ]
```
The above example shows that the numbers are split and the elements are stored in an array. In another example, regexp is passed as a parameter to the split method and the limit is "4". Here, the strings, which have box at the start, are split but only 4 splits will occur as the limit passed to the split method is 4.

# The replace method
The JavaScript replace() method is used to replace a part of the string with the new substring. This method returns the new string after replacing the part of the string or the whole string itself. The replace() method accepts a regexp and replacement string as arguments, searches for the specified regexp in the given string, and replaces that part with the replacement string if the match occurs. The syntax of the replace() method looks like this:
```
string.replace(originalStr, newStr);
```
The above syntax consists of the following:

string, a string on which the replace method is applied and in which some part of the string is to be replaced.
originalStr. It is searched on the given string and replaced by newStr.
newStr, the string which replaces the originalStr.
```
let text = "Javascript Javascript javascript";

text.replace(/Javascript/, "JavaScript"); // 'JavaScript Javascript javascript'

text.replace(/Javascript/g, "JavaScript"); // 'JavaScript JavaScript javascript'

text.replace(/Javascript/gi, "JavaScript"); // 'JavaScript JavaScript JavaScript'
```
If the regexp has the g flag set, the method replaces all the matches in the string with the replacement string. Otherwise, it replaces only the first match it finds. If the first argument to the replace() method is a string rather than regexp, the method searches for the given string instead of converting it into regexp.
