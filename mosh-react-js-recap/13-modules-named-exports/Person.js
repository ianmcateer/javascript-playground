export class Person {
  constructor(name){
    // this returns reference to current object
    // setting name property to the name argument we recieve from the outside
    this.name = name
  }

  walk(){
    console.log('walk')
  }
}