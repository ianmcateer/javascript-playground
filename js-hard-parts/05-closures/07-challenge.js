// Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter.Any additional arguments after wait are provided to func when it is invoked.HINT: research setTimeout();

const delay = (callback, waitTime) => {
  const innerFunc = () => {
    setTimeout(callback, waitTime);
  }
  return innerFunc
}

const foo = () => {
  console.log('finally running')
}

const someFunc = delay(foo, 3000)
someFunc()

