// Create a function createFunction that creates and returns a function.When that created function is called, it should print "hello".

const createFunction = () => {
  const innerFunc = () => {
    console.log('hello')
  }
  return innerFunc
}

const someFunc = createFunction()
someFunc()