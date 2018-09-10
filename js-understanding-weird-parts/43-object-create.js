// function constructor one way- classical inheritance
// Object.create() another way - pure prototypical inheritance- simple,straightforward

var person = {
  firstName: "default",
  lastName: "Default",
  greet: function() {
    return `hi ` + this.firstName;
  }
};

var john = Object.create(person)

// what does this create??
// object.create creates an empty object with its prototype pointing to whatever you pass in 
// so then you override what you want to by setting the properties yourself

john.firstName = 'john'
john.lastName = 'doe'

// polyfill- code that adds a feature that the engine may lack- Object.create new 
