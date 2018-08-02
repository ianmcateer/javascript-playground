import _ from 'lodash'
// currying is when you create a function
// which can then later be called with different arguments

// currying is when a funciton doesnt take all of its arguments up front
// instead it wants you to give it the first argument and then it returns another function which you call with the second argument

// const abc = (a,b,c) => {
//   return [a,b,c]
// }

// const curried = _.curry(abc)
// curried(1)(2)(3)
// curried(1, 2)(3)

let dragon = (name, size, element) => [
  name + 'is a ' +
  size + ' dragon that breathers ' +
  element + '!'
]

dragon = _.curry(dragon)

// console.log(dragon('fluffykins','big', 'fire'))

// curried function
// dragon is a function that takes a name
// it returns another function that takes a size
// size returns another function which takes an element
// let dragon = 
//   name => 
//     size => 
//       element => 
//         name + 'is a ' +
//         size + ' dragon that breathers ' +
//         element + '!' 

// console.log(dragon('fluffykins')('big')('fire'))

// so with currying you can add the arguments as the application progresses- add a sprinkle of an argument here mix it with another argument here eg...

let fluffykinsdragon = dragon('fluffykins')
let tinyDragon = fluffykinsdragon('small')
console.log(tinyDragon('fire'))

// libraries exist to change functions into curriable functions