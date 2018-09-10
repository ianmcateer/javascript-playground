// how do we set the prototype?

function Person (firstName, lastName){
  this.firstName = firstName,
  this.lastName = lastName
}

var john = new Person('john', 'doe')
console.log(john)

// when use funciton constructor it already sets the prototype for you 
// john.__proto__

// all functions have a property- one of them is prototype
// this is used only by the new operator 
// the prototype property of a function is not the prototype of that function- its the prototype of any objects created if you are using the function as a function constructor

// starts its life as an empty object
Person.prototype.getFullName = function (){
  return this.firstName + ' ' + this.lastName
}

// when call new - creates empty object- its sets the prorotype of that empty object to the prototype proerty of the function that you then call

// the .prototype proeprty is where the __proto__ points to any objects created using the function as a constructor