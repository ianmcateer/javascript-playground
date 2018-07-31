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


suspects.forEach((element, index, array) => {
  let suspectObj = CreateSuspectObjects(element)
  suspectList.push(suspectObj)
})

console.log(suspects)

// foreach is a method on the array 
// we have to get into prototypes and object orientated stuff