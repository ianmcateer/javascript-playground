// what happens when js executes/runs our code?
// processes it line by line - but now jit
// jit compliation
// it assigns data to labels 

const num = 3
function multiplyBy2 (inputNumber){
  const result = inputNumber*2
  return result
}
const name = 'Will'

const output = multipleBy2(4)
const newOutput = multipleBy2(10)
// () running a function
// default waiting value is undefined

// create a local execution context- has its own memory and thread

// after local execution context closes it gets erased 

// javascript needs to keep track of that fact- call stacks 

// when newOuput gets called it creates another new execution context