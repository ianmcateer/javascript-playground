var foo = "foo";

(function IIFE(bar) {
  var foo = "foo2";
  console.log(foo);
})(foo)

// changing from declaration it to funciton expression
// (bob)();
// console.log(foo);

// putting a function around it can help with scoping issues
// downside- bob is in enclosing scope - we need it to invoke the function

// function expressions-
