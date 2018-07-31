// function CreateSuspectObjects(name) {
//   return {
//     name: name,
//     color: name.split(' ')[1]
//     speak: function() {
//       console.log(`my name is ${name}`)
//     }
//   }
// }


// js classes are really just functions that return objects 
// es6- method on the object now
function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak() {
      console.log(`my name is ${name}`)
    }
  }
}

var suspects = ['miss scarlett', 'colonel mustard', 'mr white']
var suspectList = []

// loop through our list
for (let i = 0; i < suspects.length; i++) {
  // call the function for each elements in the array and push it to suspectListArray
  suspectList.push(CreateSuspectObjects(suspects[i]))

}
console.log(suspectList)