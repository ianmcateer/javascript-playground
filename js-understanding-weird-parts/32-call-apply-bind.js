// funciton execution context sets up this for us
// would be nice to control the this variable is set to
// funciton special kind of object- has code peorpety, name proeprty,
// all funcitons have some special methods- call method, bind, apply

var person = {
  firstName: "john",
  lastName: "doe",
  getFullname: function() {
    var fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
};

// this will point to global object
var logName = function(lang1, lang2) {
  console.log("Logged: " + this.getFullname());
  console.log("arguments: " + lang1 + " " + lang2);
  console.log("----------------------");
};

// use the funciton as an object- calling the bind method- can pass it whatever object want to set this keyword to
// bind returns a new function or could put .bind at end of logName
// person is what this object points to
var logPersonName = logName.bind(person);

// logName() // will get an error
logPersonName();

// call nvokes the function
// call also lets me decide what the this variable will be
// call doesnt create a copy, it executes it
logName.call(person, "en", "es");

// does same thing as call but one differentce
// apply method wants an array of parameters
logName.apply(person, ["en", "es"]);

// funciton borrowing
var person2 = {
  firstName: "jane",
  lastName: "doe"
};

// can borrow a function
console.log(person.getFullname.call(person2, "test"));

// function currying
// bind can pass parameters
// by doing this you are permanently chaning the parameters when the copy is made
function multiply(a, b) {
  return a * b;
}
// changing a to two
var multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo()
