const _ = require('underscore')

function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(" ")[1],
    speak() {
      console.log(`my name is ${name}`);
    }
  };
}

var suspects = ["miss scarlett", "colonel mustard", "mr white"];
var suspectList = [];


// difference between this and forEach? 
// this takes array as an argument
// _.each works for arrays and pobjects
_.each(suspects, (element, index) => {
  suspectList.push(CreateSuspectObjects(element))
})

console.log(suspectList)