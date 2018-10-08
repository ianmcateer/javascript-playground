// https://www.udemy.com/the-complete-nodejs-developer-course-2
//promises solve asynchronous code
//if goes well resolve()- fullfilled eg http request
//reject means promise not fulfilled

var somePromise = new Promise(function(resolve, reject){
  reject('hey this promise was rejected')
})

//only gets called if promise fullfilled
somePromise.then(function(message){
  console.log(message)
})

//only gets called if promise rejected
somePromise.catch(function(message){
  console.log(message)
})
