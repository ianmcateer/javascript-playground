// Used to determine if any element in an array passes a test specified by a given function.
// The function passed to some gets invoked once for each element in the array. As soon as that
// function returns a truthy value, some will stop executing and return true. If the function passed
// to some never returns a truthy value, then some will return false.

const ages = [6, 14, 12, 22, 13]
const hasAdultSupervision = ages.some((age) => {
  return age >= 21
})

const canRentCar = ages.some((age) => {
  return age >= 25
})

console.log(hasAdultSupervision) // true
console.log(canRentCar) // false
