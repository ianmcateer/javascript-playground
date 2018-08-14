//  now dividimg array by two

function copyArrayandDivideby2(array) {
  let output = []
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2)
  }
  return output
}
const myArray = [1, 2, 3]
let result = copyArrayandDivideby2(myArray)


// to generalise the add/ divide and multiple function we can add a parameter
// we can wrap inside function

function copyArrayAndManipulate(array, instructions){
  let output = []
  for (let i = 0; i < array.length; i++) {
    output.push(instructions[i])
  }
  return output
}

function multipleBy2(input){
  return input * 2
}

let result = copyArrayandDivideby2([1,2,3], multipleBy2)

// higher order function is a function that can take in another function- copyArrayandManipulate


