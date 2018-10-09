// Allows you to sort the elements of an array. This one is actually more complex than I’d like it to be.
// Here’s my rule of thumb that works _most of the time_™. If what you’re sorting is based on string values,
// you can just call .sort() and you’d get what you’d expect.

const friends = ['Jake', 'Jacob', 'Mikenzi', 'Alex']
friends.sort()

console.log(friends) // ["Alex", "Jacob", "Jake", "Mikenzi"]

// If you’re wanting to sort an array of integers, you can pass in a function
// and return the first argument minus the second argument.
const ages = [21, 19, 35, 38, 18, 23]
ages.sort((a,b) => a - b)
console.log(ages)

const users = [
  { name: 'Jim', age: 28 },
  { name: 'Alex', age: 32 },
  { name: 'Mikenzi', age: 26 },
  { name: 'Christina', age: 42 },
]

users.sort((a,b) => a.age - b.age)

users.sort((a, b) => a.name > b.name)
// Note that .sort is mutative so each time you invoking it you’re modifying the original array.
