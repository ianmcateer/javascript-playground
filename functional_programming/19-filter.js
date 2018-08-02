// from https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84s

var animals = [
  {name: 'Fluffy', species: 'rabbit'},
  {name: 'CAro', species: 'dog'},
  {name: 'Harold', species: 'fish'},
  {name: 'Jimmy', species: 'cat'},
  {name: 'Fluffy', species: 'dog'},
]

// var dogs = []
// for (let i = 0; i < animals.length; i++){
//   if(animals[i].species === 'dog'){
//     dogs.push(animals[i])
//   }
// }

// console.log(dogs)

var dogs = animals.filter((element)=> {
  return element.species === 'dog'
})
console.log(dogs)