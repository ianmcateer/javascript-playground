// Turns (or joins) all elements of an array into a string and returns it.
// By default, when converted into a string, each item in the array will be separated by a comma.
// You can change that by passing in a custom separator as the first argument.

const splitSentence = ['learn', 'react', 'at', 'tylermcginnis.com']

let result1 = splitSentence.join()
let result2 = splitSentence.join('')

console.log(result1, result2)
