// modulee has imports, code, exports


const APP = {}
function usersWrapper = ({
  var users = ['tyler','sarah','dan']

  function getUsers(){
    return users
  }
  APP.getUsers = getUsers
}

usersWrapper()  // only thing on the global namespace


//IIFE- module pattern
(function(){
  console.log('immediately invoked')

})()

////////////////////////////////////
//solves iife issue
//commonJS
var users = {"tyler", "sarah", "dan"}
function getUsers(){
  return users
}
module.exports.getUsers = getUsers

var users = require('./users')

//module bundler- looks at all imports and exports and bunles them all together into single file browser can understand
//makes bundle.js file- eg webpack
// es modules come out of the box- "import keyword"
