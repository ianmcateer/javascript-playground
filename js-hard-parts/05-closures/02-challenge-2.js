// Create a function createFunctionPrinter that accepts one input and returns a function.When that created function is called, it should print out the input that was used when the function was created.

const createFunctionPrinter = (input = 'hello') => {
  const innerFunction = () => {
    console.log(input)
  }
  return innerFunction
}

const someFunc = createFunctionPrinter('some input')
someFunc()