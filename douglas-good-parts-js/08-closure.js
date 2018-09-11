// closure; lexical scoping
// the context of an inner funciton includes the scope of the outer functions
// an inner funciton enjoys that context even after the parent function has returned

// GLOBAL
var names = ['zero', 'one','two', 'three']

var digitName = function(n){
  return names[n]
}

console.log(digitName(3))

// SLOW
var digitNames = function(n){
  var names = ['zero', 'one','two', 'three']
  return names[n]
}
console.log(digitNames(3))

// Closure
var digitNamess = (function(){
  var names = ['zero', 'one','two', 'three']

  return function(n){
    return names[n]
  }
}())

console.log(digitNamess(3))
