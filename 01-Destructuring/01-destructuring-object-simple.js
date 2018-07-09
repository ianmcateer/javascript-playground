// destructuring lets you assign the properties of an object or array to variables 
const someObject = {
  name: 'ian',
  age: 24,
  location: 'brisbane'
}

let {name, age} = someObject
console.log(name, age)