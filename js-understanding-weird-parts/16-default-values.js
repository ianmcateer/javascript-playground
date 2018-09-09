function greet(name){
  name = name || 'your name here'
  console.log(`hello ${name}`)
}
greet('ian')
greet() //hello undefined

// the variable or parameter is initially set to undefined
// undefined || 'hello'

// || returns the first value that can be coerced
'hi' || 'hello' //returns 'hi'