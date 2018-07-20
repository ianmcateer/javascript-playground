class Person {
  // cosntructor sets up the state of the instance
  constructor(name = 'Anonymous', age = 0) {
    // this refers to the class instance
    this.name = name 
    this.age = age
  }

  // setting up methods- the method we are defining only gets run if we explicity call it
  getGreeting() {
    return `hi my name is ${this.name} my age is ${this.age}`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    // superrefers to parent class
    super(name, age)
    this.major = major
  }

  hasMajor(){
    return !!this.major
  }
  getGreeting() {
    let description = super.getGreeting()

    if(this.hasMajor()){
      description = description += `their major is ${this.major}`
    }

    return description
  }
}

// const me = new Person('Ian Mcateer', 25)
// console.log(me.getGreeting())


// const you = new Person()
// console.log(you.getGreeting())

const student = new Student('ian', 26, 'law and business')
console.log(student.hasMajor())
console.log(student.getGreeting())

const student2 = new Student('ian', 26)
console.log(student2.hasMajor())
console.log(student2.getGreeting())


class Traveller extends Person {
  constructor(name, age, location){
    super(name, age)
    this.location = location
  }

  isHomeLocation(){
    return !!this.location
  }

  getGreeting(){
    let description = super.getGreeting()
    if(this.isHomeLocation()){
      description = description += ` im visiting from ${this.location}`
    }
    return description
  }
}

const traveller = new Traveller('ian', 26, 'brisbane')
console.log(traveller.getGreeting())