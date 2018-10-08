// https://www.youtube.com/watch?v=QO4NXhWo_NM&t=756s
// promise is an object- eg fetch returns a promise
//object can be in a certain state, can be pending, can be fulfilled- its been successfully resolved, or it can be rejected
//then if rejected, catch if rejected

const fetch = require('node-fetch')

const url = 'https://randomuser.me/api/?results=10'; // Get 10 random users

// let promise = fetch(url)
// // console.log(promise) // <pending>
// promise.then(data => console.log(data))
// promise.catch(error => console.log(error))

fetch(url)
  .then(data => data.json())
  .then(json => console.log(json))
  .catch(error => console.log(error))
