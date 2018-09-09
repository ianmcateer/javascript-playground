// object can have a primitive property, an object proeprty, or a method (method)
// the core object has an address and has a reference to the address of where its properties are

// can access those slots with dot or []
var person = new Object()
person['firstName'] = 'ian'

var firstNameProperty = 'firstName'
console.log(person[firstNameProperty])