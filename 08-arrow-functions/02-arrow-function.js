// arguments store all the arguments passed into function
const add = function (a ,b) {
  // return a + b
  // console.log(arguments)
  return arguments[0] + arguments[1]
}

console.log(add(11, 22, 23, 24))
// arguments only exist in regular functions NOT arrow functions

// arrpw functions dont bind their this value
// this is not bound

const car = {
  color: 'red',
  getSummary: function() {
    return `the car is ${this.color}`
  }
}
console.log(car.getSummary())

// there is a way to define regular funciton on an object - method defienition syntax

const car = {
  color: 'red',
  getSummary () {
    return `the car is ${this.color}`
  }
}