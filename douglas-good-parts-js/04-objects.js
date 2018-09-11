// an object is a dynamic collection of properties
// get set and delete

// get
object.name;
object[expression]; //keys must be strings

// set
object.name = value;
object[expression] = value;

// delete
delete object.name;
delete object[expression];

// object literals
var myObject = {
  foo: bar,
  name: "value",
  "@#$%": "grawlix"
};

// classes v prototypes
// js has much simpler than classes
// objects inheret from objects
// delegation; differential inheritance
// Object.create(protoype) we make an object that iherits from the old one

// whenever make an object literal it will inherit from Object.prototype

var mother = {
  a: 1,
  b: 2
};
 var daughter = Object.create(mother)

//  no b so we get inherited value from b and store it in the daughter
// storing operations will alsways go in top most object but reading will go all the way down the prorotype chain
 daughter.b += 2
 daughter.c = 9

//  usually mother is where we will put all the methods and the instances will inherit those methods

// creates object that doesnt inherit from Object.prototype
Object.create(null)