// const person = {
//   name: 'ian',
//   walk(){
//     console.log('walking')
//   }
// }

// what if want another person that can walk?
// want a bue print to create an object of that type

class Person {
  constructor(name){
    // this returns reference to current object
    // setting name property to the name argument we recieve from the outside
    this.name = name
  }

  walk(){
    console.log('walking')
  }
}

// new oeprator
const person = new Person('ian')
console.log(person.name)