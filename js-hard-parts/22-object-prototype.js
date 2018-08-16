// new keyword automates alot of our manual work
function userCreator(name, score){
  // let newUser = Object.create(functionStore)
  this.name = name
  this.score = score
}

userCreator.prototype = {}
userCreator.prototype.increment = function(){
  this.score++
}

let user1 = new userCreator('will', 3)