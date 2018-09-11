// write a function identityf that takes an argument and returns a function that returns that argument

function identityf(arg){
  return function (){
    return arg
  }
}

var three = identityf(3)
console.log(three()) //3