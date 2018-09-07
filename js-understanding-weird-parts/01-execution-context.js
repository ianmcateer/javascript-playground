// the global execution context
// whenever code is run it is run inside execution context
// the base is the global execution context- global- thing that is accessible everywhere
// it creates two things for you- global object, and 'this'
// also get access to outer enviornment- which is null at the global level
// also creates memory for the global variables and functions- hoisting
// global- not inside a function

console.log(a)

var a = "hello world"

function b(){
  console.log(this)
}

b()