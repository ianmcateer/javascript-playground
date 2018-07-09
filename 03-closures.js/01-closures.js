// global variables are problematic- can cause bugs
// closure is a function with access to its own private variables
// variables hidden from all othr functions\

var birds = 3

dogHouse = () => {
  let dogs = 8 
  // one this function returns we lose access to the dogs variable- can make another function using that variable
  showDogs = () => {
    dogs++
    console.log(dogs)
  }
  return showDogs
}

let someFunction = dogHouse()
someFunction()
someFunction()
let someNewFunction = dogHouse()
someNewFunction()

// you have an outer function- some private variables within the outer functions scope
// inner funciton that can modify or log out any of the prvate variables
// inner functon is returned

// whenever the outer funciton is called a new private scope is created
// and the funciton returnedd can read or write for this private scope
// this new scope is seperate to any other closures the outerfunction has creted previosly 