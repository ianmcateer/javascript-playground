// Now we are going to create a function addByX that returns a function that will add an input by x.
const addByX = (initialNum) => {
  const inner = (numberToAdd) => {
    initialNum = initialNum
    initialNum += numberToAdd
    console.log(initialNum)
  }

  return inner
}

const someFunc = addByX(5)
someFunc(5)
someFunc(5)
const someOtherFunc = addByX(5)
someOtherFunc(2)