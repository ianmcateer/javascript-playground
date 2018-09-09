// () invoke a function
// first creation phase- memeory space set up and functions too

function b(){
  
}
function a(){
  b()
}
a()

// global context first
// then a gets called and palced on stack
// a calles b and gets pushed onto stack on top of a()
// then b finishes gets popped off then a then bakck to global