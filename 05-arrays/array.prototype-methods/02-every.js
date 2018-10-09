// used to determine if every element in an array passes a test specfied by a given function

const ages = [18,21,28,34,22]

const groupCanVote = ages.every((age) => {
  return age >= 18
})

const groupCanDrink = ages.every((age) => {
  return age >= 21
})

console.log(groupCanVote) // true
console.log(groupCanDrink) // false
