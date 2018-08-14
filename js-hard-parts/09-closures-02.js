// there is a away to run a function outsidewhere it was defined- return the function and assign it to a new variable
function outer (){
  let counter = 0
  function incrementCounter () {
    counter++
  }
  return incrementCounter
}

var myNewFunction = outer()
myNewFunction()

// where do look for counter first??
// locally
// then global - but no counter still
// some magic happens 
// where define funciton determines what variables your function has access to when you call the function

// when defined increement counter we made a special bond to the immediate total surrounding live local memroy
// when return that funciton out you get that funciton plus that special bond to the surrounding data- on theback of the function comes with it that data- in this case its counter 

// but before global where do we actually look? we look in the backpack

// the backpack is persistent - holds onto that data live

// makes a bond using [[scope]]- funciton gets a hidden property- this is behind the scenes- only get acess to this when you run this returned funcitons
// whenever call that function, it will always look in its immediate local enviornment and then in the [[scope] property next before looking ny further up]

// garbage collects eveything execpt the variable we want to hold onto in the backpack

// we call this backpack- the closure
// the closed over variable enviornment 

// lexiacl scope- determined where i was defined not when i was called 
// lexical scope- the available live data when our function is defined 