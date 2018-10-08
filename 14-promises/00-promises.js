// a promise is an object
//instead of passing a function a callback you ask a function for a promise
//fetch supports promises
//once have that promise you have it as an object and you can do all sorts of things with it
//can be pending, fullfilled or rejected meaning error has happened
//can give it a function for when its successful and can give it an error for when there is an error

let promiseToCleanRoom = new Promise(function(resolve, reject){
  //  code to clEAN THE ROOM
  let isClean = false

  if(isClean){
    resolve('clean')
  } else {
    reject('error rejected')
  }
})

promiseToCleanRoom.then(function(fromResolve){
  console.log('the room is' + fromResolve)
}).catch(function(fromReject){
  console.log(fromReject)
})