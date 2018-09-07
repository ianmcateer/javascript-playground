function sayHello(){
  for(var i = 0; i < 5; i++){
    console.log(i)
  }
  // i is still accessible here
  console.log(i)
}
sayHello()

// problem
// var- function scoped- not block scoped
// ecmascript6- es6 gives us let to solve this proble- let- block scoped 