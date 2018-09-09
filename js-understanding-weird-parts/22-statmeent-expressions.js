// expression is a unit of code that results in a value
// a statement does some work

// these are expressions bc they return a value
var a = 3;
1 + 2;

// statement- eg if statement itself is just a statement

// function statement
// doesnt return a value until executed
function greet() {
  console.log("hi");
}
console.log(greet2)
// function expression
// it results in a new function object
// they arent hoisted
var greet2 = function() {
  console.log("hi");
};
