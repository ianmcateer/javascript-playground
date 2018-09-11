// write a function lift that takes a binary function and makes it callable with two invocation

function mul(num1, num2) {
  return num1 * num2;
}

function add(num1, num2) {
  return num1 + num2;
}

function liftf(binary){
  return function(first){
    return function(second){
      return binary(first,second)
    }
  }
}


var addf = liftf(add)
let result = addf(3)(4)  //7
liftf(mul)(5)(6)

console.log(result)