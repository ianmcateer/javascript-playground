const _ = {}

_.each = function(list, callback) {
  if (Array.isArray(list)) {
    // loop through array
    for (var i = 0; i < list.length; i++){
      // call the callback with each element
      callback(list[i], i, list)
    }
  } else {
    // loop through object
    for (let key in list) {
      // using [] bc its a variable
      callback(list[key], key, list)
    }
  }
}

_.each(['ian', 'michael', 'mary', 'derdriu', 'm-c'], (element, index, list) => {
  console.log(element, index)
})

let obj = [
  { name: 'ian' }, 
  { name: 'michael'}
]

_.each(obj, (element, index, list) => {
  console.log(element, index);
})