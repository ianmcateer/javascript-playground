// const square = (num) => {
//   return num * num
// }

// can use shorthand syntax here
// when we have simple functions 
const square = (num) => num * num

console.log(square(5))

const people = [
  {
    name: 'andrew',
    age: 27
  },
  {
    name: 'ian',
    age: 25
  },
  {
    name: 'soe soe',
    age: 19
  }
]

const under20 = people.filter((person) => person.age < 20)

console.log(under20)