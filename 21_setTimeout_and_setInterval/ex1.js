
// What will be the output of the following code snippet? Print the values in one row without spaces in between.

console.log(5);

function printOne() {
 console.log(1);
}

console.log(9);

function printFour() {
 console.log(4);
}

setTimeout(printSix, 3000)
setTimeout(printOne, 0)
setTimeout(printFour, 0)
setTimeout(printSeven, 2000)

function printSix() {
 console.log(6);
}

function printSeven() {
 console.log(7);
}

//5
//9
//1
//4
//7
//6
