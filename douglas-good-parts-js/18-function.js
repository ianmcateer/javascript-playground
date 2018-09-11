// write a function addf that adds from two invocations
function addf(num){
  return function(num2){
    return num + num2
  }
}

let result = addf(3)(4)  //7
console.log(result)