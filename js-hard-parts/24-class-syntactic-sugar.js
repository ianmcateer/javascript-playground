// another solution
// writing shared methods sperately from our object constructor(doing this inside the user.rototype object)
// other language let us do it in one place

// es2015 gave us class syntactic sugar

class User {
  constructor(name, score){
    this.name = score
    this.score = score
  }
  // this is syntactic sugar for User.prototype.incremement = 
  incremenet(){
    this.score++
  }
  // User.prototype.login
  login(){
    console.log('login')
  }
}

let user1 = new User('eva', 9)
user1.increment()

// when we run new User the construcotr is the function that we will be running