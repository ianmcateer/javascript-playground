function User(name,score){
  this.name = name
  this.score = score
}

User.prototype.incremenet = function(){
  this.score++
}

User.prototype.login = function(){
  console.log('logged in')
}

let user1 = new User('Eva', 9)
user1.increment()

// this is being set to the empty object
// has a special prototype object on the function here- atm it is just an empty object called prototype

// what User('eva',9) reurns is an object {name: 'eva', score: 9} but also __proto__ 
// which points to user.prototype object 
// __proto__ is bonded to user1.prototype

// __proto__ is the reference created
// prototype is the set of funcitons we want our objects hat get returned from user to have access to in their __proto__ property
