// immediately invoked function expressions

// function statement
function greet(name) {
  console.log("hello " + name);
}

// function expression
var greeting = (function(name) {
  console.log("hello " + name);
})('ian');


// trick the syntax parser- trick it so it doesnt see the functon as the first word 
(function(name) {
  console.log("hello " + name);
})('ian');

// you only use () with expressions 
// a new execution context is created