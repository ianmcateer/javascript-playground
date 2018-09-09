// namespace- a container for variables and functions
// js doesnt have namespaces but we can fake it

var greet = 'hello'
var greet = 'hola'
console.log(greet)

// but if two libararies had this it would be a problem
// solution- create an object

var english = {}
var spanish = {}

english.greet = 'hello'
spanish.greet = 'hola'