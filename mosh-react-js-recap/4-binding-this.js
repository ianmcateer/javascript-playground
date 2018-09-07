const person = {
  name: 'ian',
  walk(){
    console.log(this)
  }
}

person.walk()

// walk is just an object- functions are objects
// bind is a method on objects to bind a function to an object
// what we pass as an argument will determine the value of this, if bind the person obj
// bind method will return a new instance of the walk funciton and set this to point to the person object
const walk = person.walk.bind(person)
walk()

// so using bind we can set value of this permanently