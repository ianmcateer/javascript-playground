// single version of that function
// store incremment funciton in just one object
// have the interpreter, if it doesnt find the function on user1, look up to that other object to check if its there
// how to make this link?

// using the prototypal nature of njs
// when i call a method on an object lets go look at that object - if dont find on that object look up to its prototypal nature

function userCreator(name, score) {
  // all this object.create does it create an empty object labeled new user
  // whatever pass in-that empty object has makes a special bond to the userFunctionStore
  let newUser = Object.create(userFunctionStore)
  newUser.name = name
  newUser.score = score
  return newUser
}

let userFunctionStore = {
  increment: function(){this.score++},
  login: function(){'youre logged in'}
}

let user1 = userCreator('will', 3)
let user2 = userCreator('tim', 3)
user1.increment()
// user1 doesnt have an increment function on it 
// it then looks to the special bond and finds the property

// howdo we ensure its referring to the right object?- js helps us by givingus the keyword this
// its like a placeholder- js always assign the value of this - will refer to the left of the dot- in this case its user1

// hidden popertyis __proto__ reference to userFunctionStore