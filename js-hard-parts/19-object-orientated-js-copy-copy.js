// repetitive functionality
// we use a function to wrap up repeated code 

function userCreatorFunction(name, score) {
  let newUser = {}
  newUser.name = name
  newUser.score = score
  newUser.increment = function() {
    newUser.score++
  }
  return newUser
}

let user1 = userCreatorFunction('will', 2)
let user2 = userCreatorFunction('ian', 3)

user2.increment()

// problem with this??? creating a new function for every new user
// the functions are the same on eveyr single object- why are we creating new function for every new user