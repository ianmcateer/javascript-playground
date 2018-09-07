class Person {
  constructor(name){
    // this returns reference to current object
    // setting name property to the name argument we recieve from the outside
    this.name = name
  }

  walk(){
    console.log('walk')
  }
}

class Teacher extends Person {
  // because we called constructor we need to call the parent class
  constructor(name, degree){
    // super references the parent class
      // this will initialise the name property
    super(name)
    this.degree = degree
  }

  teach(){
    console.log('teach')
  }
}

// can use inehritance or composiiton 
// inherit- inheit all the methods in the parent class and also the constructor

const teacherObj = new Teacher('ian','science')
console.log(teacherObj.degree)