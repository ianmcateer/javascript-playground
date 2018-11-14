const _ = require('lodash')
// _.partial(func, [partials])
//creates a new func that calls fun with args
// Creates a function that invokes func with partials prepended to the arguments it receives.
// This method is like _.bind except it does not alter the this binding.

// Two arguments
function add (a, b){
  return a + b
}

const add5 = _.partial(add, 5)
let result = add5(10)
console.log(result)
