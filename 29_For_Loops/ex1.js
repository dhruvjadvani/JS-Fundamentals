/*
Write a program that calculates the sum of all numbers from 1 to 100 inclusive using loops and displays the result to the console.

Don't forget to call the function.
*/

function sum (a, b) {
  let v = 0;
  for(let i = a; i <= b; i++) {
    v = v + i;
  }
  return v;
}

console.log(sum(1, 100));

