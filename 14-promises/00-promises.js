// tyler mcginnes
// how do we create a promise?
//how do we change the status of a promise?
//how do we listen for when the staatus of the promise changes

const promise = new Promise((resolve, reject) => {
  setTimeout(()=> {
    resolve()
  }, 2000)
})
promise.then(() => {
  console.log('success')
})

promise.catch(() => {
  console.log(error)
})
