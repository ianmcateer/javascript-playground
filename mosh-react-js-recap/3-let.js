const person = {
  name: 'ian',
  walk(){
    console.log(this)
  }
}

// this always a reference to the current object 
// this will refer to the object
person.walk()

// passing the reference
const walk = person.walk
// this is now the global object- unless strict mode- then it will be undefined
walk()