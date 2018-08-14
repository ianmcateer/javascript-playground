function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Examine the code for the outer function.Notice that we are returning a function and that function is using variables that are outside of its scope.
// Uncomment those lines of code.Try to deduce the output before executing.

console.log('guess is 1')
willCounter();

console.log('guess is 2')
willCounter();
console.log('guess is 3')
willCounter();

console.log('guess is 1')
jasCounter();

console.log('guess is 4')
willCounter();