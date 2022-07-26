/*
Create a switch operator inside the function getSalary. It should show the following text in the console.log depending on the values:

value	          text in console.log
"Bootstrap"         $15 per hour

"Chrome Extension"  $20 per hour

"React"             $30 per hour

other cases         $25 per hour


Sample Input 1:
Bootstrap

Sample Output 1:
$15 per hour

*/

function getSalary(value){
     // write your code here
     switch(value) {
          case "Bootstrap":
            console.log("$15 per hour");  
            break;
          case "Chrome Extension":
            console.log("$20 per hour");
            break;
          case "React":
            console.log("$30 per hour");
            break;
          default:
            console.log("$25 per hour");
            break;
     }
}
