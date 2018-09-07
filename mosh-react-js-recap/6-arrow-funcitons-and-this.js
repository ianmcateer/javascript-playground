// arrow funcitons and this
// they dont rebind this
const person = {
  talk(){
    setTimeout(() =>{
      console.log('this', this)
    }, 1000);
  }
}
person.talk()

// this will refer to the window object
// setitmeout is standalone funciton- standalone functions by default returns window object

// how can we reference the person object in the callback function?
// can sue arrow function because they done rebind this