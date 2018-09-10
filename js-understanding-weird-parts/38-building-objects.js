// function constructors, new

function Person (firstName, lastName){
  this.firstName = firstName,
  this.lastName = lastName
}

var john = new Person('john', 'doe')
console.log(john)

// new is an operator
// an empty object is created and then invokes the functions
// the execution context creates variable called this
// new changes what the this variable points to
// this points to the new empty object in memory
// adding lastname and firstname to that empty object
// the object gets returned by the new operator