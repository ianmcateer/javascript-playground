const objectify = function(key, value){
  return {
    [key]: value
  }
}

const result = objectify('name', 'ian')
console.log(result)
