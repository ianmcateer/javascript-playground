// variable environemnts: where is the variable

funciton b(){
  var myvar
}
function a(){
  var myVar = 2
  b()
}

var myvar = 1
a()

// what is value myVar any point in time?
// global execution context created
// global myVar put into memory space

// every execution context has its own variable enevironment 