let cleanRoom = function(){
  return new Promise(function(resolve, reject){
    resolve('cleaned the room')
  })
}

let removeGarbage = function(p){
  return new Promise(function(resolve, reject){
    resolve('removed garbage')
  })
}


let winIceCream = function(p){
  return new Promise(function(resolve, reject){
    resolve('won ice cream')
  })
}

cleanRoom().then(function(fromResolve){
  console.log(fromResolve)
})
