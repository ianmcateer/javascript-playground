// eg an obj has a prop1
// obj.prop1 goes and look for the address where that prop lies
// js engine adds proeprties and methods to things
// all objects have a prototype proeprty (__proto__)
// this is simply a reference to another object
// if call obj.prop2 the dot operator looks first in obj itself
// next goes to the prototype and looks for it there- so its actually on its objects prototype
// that protoype itself can point to another prototype
// the prototype chain
// objects can share the same prototype

var person = {
  firstName: 'default',
  lastName: 'default',
  getFullName: function (){
    console.log( `${this.firstName} ${this.lastName}`)
  }
}

var john = {
  firstName: 'john',
  lastName: 'doe'
}

// dont do this ever only for demo!!
john.__proto__ = person

john.getFullName()

