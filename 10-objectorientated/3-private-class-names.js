{
  class Player {
    // constructor(){
    //   this.points = 0
    //   this.assists = 0
    //   this.rebounds = 0
    //   this.steals = 0
    // }
    points = 0
    assists = 0
    rebounds = 0
    steals = 0

    addPoints(amount){
      this.points = this.points + amount
    }
    addAssists(){
      this.assists = this.assists + 1
    }
    addRebound(){
      this.rebounds += 1
    }
    addSteal(){
      this.steals += 1
    }
  }
}

{
  class Animal {
    eat(){}
    sleep = () => {}  //not being put on the prototype
  }

  // same as
  function Animal(){
    this.sleep = function(){}
  }
  Animal.prototype.eat = function(){

  }
}


/////////////////////////////////////////
// private fields; used to use _

{
  class Car {
    _milesDriven = 0
    drive(distance){
      this._milesDriven += distance
    }
  }

  const tesla = new Car()
  tesla.drive()
  console.log(tesla._milesDriven) // could do this
}
