// In the first part of the extension, you're going to rebuild map as mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop.

// have a list of numbers return the number * 5

function mapWith (list, callback) {
  let returnedArray = []
  list.forEach((element) => {
    returnedArray.push(callback(element))
  })
  return returnedArray
}

let multiplyBy5 = (number) => {
  return number * 5
}

let result = mapWith([1,2,3], multiplyBy5)
console.log(result)
