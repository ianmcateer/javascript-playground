// Allows you to create a new array from a portion of an existing array. It also doesn’t modify the original array.
// .slice takes two arguments. The first argument is the index of the beginning item you want to grab in the array
// and the second argument is the index of the end item you want to grab in the array, not inclusive. So for example,
// if you do .slice(1,4), the array that is returned will have whatever elements were in the 1st, 2nd,
// 3rd index in the original array, not the 4th.


const friends = ['Jake', 'Mikenzi', 'Jordyn', 'Cash', 'Leo']

const bestFriends = friends.slice(1,4)

console.log(bestFriends) // ['Mikenzi', 'Jordyn', 'Cash']
console.log(friends)
