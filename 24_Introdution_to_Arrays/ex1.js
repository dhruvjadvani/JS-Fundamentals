/*
Alex and his four friends have been given marks in the subject Computer Science. Now, Alex wants to compare his marks with those of his friends by using an Array to store their marks. Specifically, he wants to get the difference between his mark (stored as the first element of the Array) and his best friend's mark (stored as the last element of the Array). Can you help Alex to do this?

The function is already defined for you. An array will be given as argument to this function, you don't need to create any array.

Complete the below code and use console.log() to output the result, you don't need to call the function.

Sample Input 1:
34 56 23 54 43

Sample Output 1:
-9

Sample Input 2:
12 34 6 7 0

Sample Output 2:
12

Sample Input 3:
30 40 50 60 70

Sample Output 3:
-40

Sample Input 4:
0 0 0 0 0

Sample Output 4:
0
*/

function getDifference(marks) {
   console.log(marks[0] - marks[marks.length - 1]);
}
