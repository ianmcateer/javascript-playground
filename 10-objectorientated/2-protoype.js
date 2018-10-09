// const animalMethods = {
//   sayName: function(){
//     console.log(this.name)
//   }
// }
//
// function Animal(name){
//   let animal = Object.create(animalMethods)
//   animal.name = name
//   return animal
// }
//
// const leo = Animal('leo', 7)
// leo.sayName()

//prototype is just a property on a function that points to an object


////////////////////////////////////////////////////////
{
  Animal.prototype.eat = function(){
    console.log(this.name, `is sleeping`)
  }
  Animal.prototype.play = function(){
    console.log(`${this.name} is playing`)
  }

  function Animal (name){
    let animal = Object.assign(Animal.prototype)  //delegate to Animal.prototype
    animal.name = name
    return animal
  }

  const leo = Animal('leo')
  leo.eat()
}
///////////////////////////////////////////////
//using new keyword
{
  AnimalWithNew.prototype.eat = function(){
    console.log(this.name, `is sleeping`)
  }
  AnimalWithNew.prototype.play = function(){
    console.log(`${this.name} is playing`)
  }

  function AnimalWithNew(name){
      this.name = name
  }

  const leo = new AnimalWithNew('leo')
  //new keyword creates empty object, sets this to that pbject, and automatically returns that new object
  leo.eat()
}
///////////////////////////////////////////////////////////
//js now classes- syntactic sugar
{
  class Animal {
    constructor(name){
      this.name = name
    }
    //these get added to the Animal.prototype
    sayName(){
      console.log(this.name)
    }
    eat(){
      console.log(this.name, 'is sleeping')
    }
  }
  const ian = new Animal('ian')
  ian.eat()

}

///////////////////////////////////////////////////////////
{
  const friends = []
  //  same as..
  const friendsWithoutSugar = new Array()
  // Array.prototype has all the array methods
}

////////////////////////////////////////////////////////////
{
//  how would we get the prototype of an object?
  class Animal {
    constructor(name){
      this.name = name
    }
    //these get added to the Animal.prototype
    sayName(){
      console.log(this.name)
    }
    eat(){
      console.log(this.name, 'is sleeping')
    }
  }
  const leo = new Animal('leo')
  const prototype = Object.getPrototypeOf(leo)
  console.log(prototype)
  console.log(prototype=== Animal.prototype)
  console.log(leo.__proto__ === Animal.prototype)

  // logging every key in leo
  for (let key in leo){
    console.log(`key: ${key}. value: ${leo[key]}`)
  }
}
