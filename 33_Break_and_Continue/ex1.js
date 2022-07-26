/*
You are given an array of numbers called numbers.
Write a cycle that logs "even" for each even number and "odd" for odd numbers. If the number is 0, the program must stop processing the numbers.

For the number 0, the program must not print any message.
*/

function checkEvenOrOdd(numbers) {
    // write your code here
    for(let i = 0; i < numbers.length; i++){
        if (numbers[i] === 0) {
            break;
        } else if (numbers[i] % 2 === 0) {
            console.log("even");
        } else if (numbers[i] % 2 !== 0) {
            console.log("odd");
        }
    }
}

