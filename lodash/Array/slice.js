const _ = require('lodash')

// Creates a slice of array from start up to, but not including, end.
//returns a new array!

const arrayToSlice = ['first','second','third','fourth']
const result = _.slice(arrayToSlice, 1, 3)
console.log(result)

