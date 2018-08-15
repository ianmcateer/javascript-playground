// what if we run outer again??
// we reset counter

function outer() {
  let counter = 0
  function incrementCounter() {
    counter++
    console.log(counter)
  }
  return incrementCounter
}

const myNewFunction = outer()
myNewFunction()
myNewFunction()

const anotherFunction = outer()
anotherFunction()