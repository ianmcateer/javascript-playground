// Adds one or more elements to the beginning of an array and returns the array’s new length.

const ages = [22,27,29]
ages.unshift(20) // 4
console.log(ages) // [20,22,27,29]

// Favor using .concat or the Array spread operator instead of .shift as mutations are 👺.
const ages = [22,27,29]
const newAges = [20].concat(ages)

console.log(ages) // [22,27,29]
console.log(newAges) // [20,22,27,29]
const ages = [22,27,29]
const newAges = [20, ...ages]

console.log(ages) // [22,27,29]
console.log(newAges) // [20,22,27,29]
