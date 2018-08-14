// blueprints for objects
class Human {
  constructor(){
    this.gender = 'male'
  }

  printGender() {
    console.log(this.gender)
  }
}

class Person extends Human{
  constructor(){
    // if extending from another class then have to add super 
    // it executes the parent constructor 
    super()
    this.name = 'max'
  }
  // property
  // method
  printMyName(){
    console.log(this.name)
  }
}

const person = new Person()
person.printMyName()
person.printGender()

// inheritance as well adds new propeties and methods