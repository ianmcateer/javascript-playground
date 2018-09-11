// creates an empty object out of thin air
// newly created object gets linked to another object
// newly created object gets passed in to the this context to the function call
// if that function doesnt already return its own object - the new implies a return of this

function foo() {
  this.baz = "baz";
  console.log(this.bar + " " + this.baz);
}

var bar = "bar";
var baz = new foo();

// this is the fourth way that determines the this keyword
// order of precedence: 
  // 1: function called with this keyword?
  // 2: call or apply or bind? explicit binding
  // 3: is function called on context obj? eg o2.foo where we borrowed the function- if so use that context object
  // 4: default: global object, strict mode is undefined