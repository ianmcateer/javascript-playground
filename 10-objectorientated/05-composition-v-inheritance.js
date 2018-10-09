{
  class Animal {
    constructor(name, energy){
      this.name = name
      this.energy = energy
    }
    eat(){
      console.log('eating')
    }
    sleep(){
      console.log('sleeping')
    }
  }

  class Dog extends Animal{
    constructor(name, energy, breed){
      super(name, energy)
      this.breed = breed
    }
    bark(){
      console.log('woof woof')
    }
  }
}

{
  function Dog (name, energy, breed){
    let dog = {
      name, energy, breed
    }

    return Object.assign(
      dog,
      eater(dog),
      sleeper(dog),
      player(dog),
      barker(dog)
    )
  }
}


