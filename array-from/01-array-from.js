// array from turns arry like object into an array
const constructArr = function () {
  const arr = Array.from(arguments)
  arr.push('the billiards room')
  return arr.join(' ')
}
let results = constructArr('was','it','in')
console.log(results)