function greet(whattosay) {
  return function(name) {
    console.log(whattosay + ' ' + name)
  };
}

// greet('hello there')('ian')
var sayHi = greet('hi')
sayHi('Tony')

// global execution context
// greet gets pushed on
// greet returns new function
// popped off the stack but  whattosay is kept
// sayHi execution context- looks up scope chain to find whattosay
// the sayHi still has a reference to the memory space outside of it
// the exeuciton context has closed in its outer variables
// the variables it would normally have access to anyway

// closures are just a feature taking advantage of