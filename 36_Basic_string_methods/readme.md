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

