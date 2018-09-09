// scope: where to look for things

funciton b(){
  console.log(myVar)
}
function a(){
  var myVar = 2
  b()
}

var myvar = 1
a()

// if can find myVar looks up the scope chain 