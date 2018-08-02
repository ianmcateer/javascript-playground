// https://www.youtube.com/watch?v=bCqtb-Z5YGQ&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=2

var animals = [
  { name: "Fluffy", species: "rabbit" },
  { name: "CAro", species: "dog" },
  { name: "Harold", species: "fish" },
  { name: "Jimmy", species: "cat" },
  { name: "Fluffy", species: "dog" }
];

// get the names of all the animals and store in array

// const names = []
// for (let i = 0; i < animals.length; i++){
//   names.push(animals[i].name)
// }

// filter returns true or false
const names = animals.map((element,index,list) => {
  return element.name
})

console.log(names)

