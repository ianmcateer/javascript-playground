// suppose we have a function copyArrayandMutiplyby2

function copyArrayandMutiplyby2(array){
  let output = []
  for (let i = 0; i < array.length; i++){
    output.push(array[i] * 2)
  }
  return output
}
const myArray = [1,2,3]
let result = copyArrayandMutiplyby2(myArray)