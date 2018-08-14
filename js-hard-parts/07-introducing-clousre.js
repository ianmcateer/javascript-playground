// whn our functions get called we create a live store of data(local memory) variable enviornment/state for that functions execution context

// when the function finishes executing its local memory is deleted (except the returned value)
// but what if our functions could hold on to live data/state between executions/ every running of the same function??
// this would let our function defenitions have an associated persistent emmeory
// it starts with returning a function from another function

function instructionGenerator(){
  function multiplyBy2(num){
    return num * 2
  }
  return multiplyBy2
}

let generatedFunc = instructionGenerator()

// running instruction geenrator- which returns the function multiple by 2- gets sotred in variable generatedfun = (num) => {return num * 2}

console.log(generatedFunc(2))