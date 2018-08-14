
// Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.

const outerFunc = (number, callback) => {
  let counter = 0
  const innerFunc = () => {
    counter++
    if (counter === number) {
      callback()
    }
  }
  return innerFunc
}

const callbackFunc = () => {
  console.log('i am finnally running')
}

const someFunction = outerFunc(3, callbackFunc)
someFunction()
someFunction()
someFunction()
someFunction()