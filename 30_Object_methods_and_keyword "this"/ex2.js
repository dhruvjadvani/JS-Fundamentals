/*
Create a counter object that has the following properties:

current with a value of 0;
the inc function, which adds 1 to the current.
The function should return the value, not print it.

*/

// write your object here
let counter = {
  current: 0,
  inc() {
    return this.current + 1;
  }
};
