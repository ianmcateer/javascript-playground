// another way to create objects and set prototypes

class Person {
  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
  }
  greet(){
    return 'hi' + ' ' + this.firstName
  }
}

var john = new Person('john', 'doe')

// class is just an object in javascript
// he doesnt like the new keyword but thinks this is better than a function constructor

// extends Person will set the prototype(__proto__)

class InformalPerson extends Person {
  constructor(firstName, lastName){
    // super will call the constructor of the object that is my prototype
    super(firstName, lastName)
  }
  // greet(){
  //   return `yo` + ' ' + this.firstName
  // }
}

var ian = new InformalPerson('ian','mcateer')
console.log(ian.greet())