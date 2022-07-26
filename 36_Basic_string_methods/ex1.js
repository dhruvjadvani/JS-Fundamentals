/*
Below you can see a string. Write a method inside the function that replaces all the instances of stun with stump.

Don't print anything, just return the new string.

 
Sample Input 1:
A skunk sat on a stun and thunk the stun stumpk, but the stun thunk the skunk stumpk

Sample Output 1:
A skunk sat on a stump and thunk the stump stumpk, but the stump thunk the skunk stumpk
*/

function replaceString(data) {
    let replacedStr = data.replace(/stun/gi, "stump");
    return replacedStr;
}
