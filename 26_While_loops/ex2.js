/*
Assume you are taking a glass elevator to the 10th floor of a business center.
While below the 6th floor, all you see is twigs of the trees growing near the center. 
Once you get higher though, you get a wonderful view of the city.

Set the variable n = 1 which will increase the number of the floor you've reached consequently, one by one. 
Check if that number is not greater than 10 in the while loop. If you are lower than the 6th floor, display Tree!, otherwise, display City!
*/

let n = 1;
while(n <= 10) {
  if(n < 6) {
    console.log("Tree!");
  } else {
    console.log("City!");
  }
  n++;
}
