const notes = [{}, {
  title: 'my next trip',
  body: 'i would like to go to spain'
}, {
  title: 'habits to work on',
  body: 'excercise, eating a bit better'
}, {
  title: 'office modifications', 
  body: 'get a new seat'
}]

// still an array so can pop, push and shift an object

// indexOf- returns first occurence of a value in an array
// returns -1 if doesnt find it - otherwise returns the index if found 
// it uses === so cant {} === {} bc objects passed by reference not value 
// console.log(notes.indexOf({}))


// findIndex gives us more flexibiility bc lets us work with an array of objects- if not found return -1 else return true

console.log(notes.findIndex((item, index) => {
  return item.title === 'office modifications'
}))