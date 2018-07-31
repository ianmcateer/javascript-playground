  const _ = {}

_.map = (list, callback) => {
  let newArray = []
  if (Array.isArray(list)){
    for (let i = 0; i < list.length; i++) {
      newArray.push(callback(list[i], i, list))
    }
  }
  return newArray
}

function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(" ")[1],
    speak() {
      console.log(`my name is ${name}`);
    }
  };
}

var suspects = ['miss scarlett', 'colonel mustard', 'mr white']

let suspectList = _.map(suspects, CreateSuspectObjects)
console.log(suspectList)


let newList = _.map([1,2,3,4], (element, index, list) => {
  return element + 1
})
console.log(newList)