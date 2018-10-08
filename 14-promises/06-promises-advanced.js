var asyncAdd = function(a, b){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a + b)
      } else {
        reject('arguments must be numbers')
      }
    }, 1000)
  })
}

// console.log('beginning')
// asyncAdd(5,3).then(function(result){
//   console.log('success result is', result)
// }, function(e){
//   console.log('error', e)
// })
//
// console.log('edningg')


//promise chaining

// asyncAdd('7',3).then(function(result){
//   console.log('success result is', result)
//   return asyncAdd(7,7)
// }, function(e){
//   console.log('error', e)
// }).then(function(result){
//   console.log('success result is', result)
// }, function(e){
//   console.log('error', e)
// })

asyncAdd(7,3).then(function(result){
  console.log('success result is', result)
  return asyncAdd(7,'7')
}).then(function(result){
  console.log('success result is', result)
}).catch(e => console.log(e))



