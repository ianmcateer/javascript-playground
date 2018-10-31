const _ = require('lodash')
// Creates a new array concatenating array with any additional arrays and/or values.

const firstArray = [1,2,3,4]
const newArray = _.concat(firstArray, [5,6])

console.log(newArray) // the new array
console.log(firstArray)
