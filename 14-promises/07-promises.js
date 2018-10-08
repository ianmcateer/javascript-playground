// https://www.youtube.com/watch?v=AwyoVjVXnLk
function delay(time){
  return new Promise(function(resolve, reject){
    if (typeof (time) !== 'number'){
      reject('is not a number')
    } else {
      setTimeout(function(){
        resolve()
      }, time)
    }
  })
}

delay(2)
  .then(() => console.log('worked'))
  .catch(e => console.error('error', e))
