// Reverses the order of an array. It’s important to remember that this method mutates the original array.

const letters = ['a', 'b', 'c']
letters.reverse()

console.log(letters) // ['c', 'b', 'a']


const string = 'I like JavaScript'
const arr = string.split('') // Convert the string into an array

// Then reverse the array and join it back to a string.
arr.reverse().join('') // "tpircSavaJ ekil I"
