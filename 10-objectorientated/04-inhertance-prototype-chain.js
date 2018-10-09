{
  function Animal(name, energy){
    this.name = name
    this.energy = energy
  }

  Animal.prototype.eat = function(amount){
    console.log(`${this.name} is eating`)
  }

  Animal.prototype.sleep = function(amount){
    console.log(`${this.name} is sleeping`)
  }

  Animal.prototype.play = function(amount){
    console.log(`${this.name} is playing`)
  }

  //want dog to also sleep eat or play
  function Dog(name, energy){
    this.name = name
    this.energy = energy
  }

  Dog.prototype.eat = function(amount){
    console.log(`${this.name} is eating`)
  }

  Dog.prototype.sleep = function(amount){
    console.log(`${this.name} is sleeping`)
  }

  Dog.prototype.play = function(amount){
    console.log(`${this.name} is playing`)
  }

  Dog.prototype.bark = function(amount){
    console.log(`${this.name} is barking`)
  }

  const charlie = new Dog('charlie')
  charlie.bark()
}


////////////////////////////////////////////////////////////////////
// better way to do this
//utlisie animal whenever we create a new dog
{
  function Animal(name, energy) {
    this.name = name
    this.energy = energy
  }

  Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating`)
  }

  Animal.prototype.sleep = function (amount) {
    console.log(`${this.name} is sleeping`)
  }

  Animal.prototype.play = function (amount) {
    console.log(`${this.name} is playing`)
  }

  function Dog(name, energy, breed) {
    // how can we invoke animal with this instance
    Animal.call(this, name, energy)
    this.breed = breed
  }

  Dog.prototype = Object.create(Animal.prototype)
  Dog.prototype.bark = function(){
    console.log('woof woof')
  }

  Dog.prototype,constructor = Dog

  const charlie = new Dog('charlie', 10, 'goldenoodle')
  charlie.sleep()
  charlie.bark()
}

////////////////////////////////////////////////////////
{
  class Animal {
    constructor(name, energy){
      this.name = name
      this.energy = energy
    }
    //these get added to the Animal.prototype
    sayName(){
      console.log(this.name)
    }
    eat(){
      console.log(this.name, 'is sleeping')
    }
  }

  class Dog extends Animal {
    constructor(name, energy, breed){
      super(name, energy) // call the constructor function of animal- dog going to get a name and an energy
      this.breed = breed
      this.energy = energy
      this.breed = breed
    }
    bark(){
      console.log('woof woof')
    }
  }
  const leo = new Dog('leo', 7, 'goldenoodle')
  leo.bark()
}
