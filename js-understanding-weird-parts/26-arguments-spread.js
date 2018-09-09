// also sets up arguments
// contains list of parameters you pass to a function

function greet(firstName, lastName, ...other) {
  console.log(firstName);
  console.log(lastName);
  console.log(arguments)
  console.log(other)
}
greet('hi','hi','hi', 'hi')

// italicised brackets- array like but doesnt have all features

// new spread parameter wraps it up into array
// ...