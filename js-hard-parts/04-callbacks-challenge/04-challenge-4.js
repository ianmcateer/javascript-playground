// Challenge 4
// The function forEach takes an array and a callback, and runs the callback on each element of the array.forEach does not return anything.

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++){
    callback(array[i])
  }
 }

 multipleBy2 = (number) => {
  console.log(`the number is ${number}`)
 }
forEach([1,2,3], multipleBy2)