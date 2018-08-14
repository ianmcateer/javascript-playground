// what if we run outer again??

function outer() {
  let counter = 0
  function incrementCounter() {
    counter++
    console.log(counter)
  }
  return incrementCounter
}

var myNewFunction = outer()
myNewFunction()
myNewFunction()

const anotherFunction = outer()
anotherFunction()