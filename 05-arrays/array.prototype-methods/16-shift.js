// Removes the first element from an array and returns it. Favor using .filter instead of .shift as mutations are 👺.

const friends = ['Karl', 'Mikenzi', 'Jake']
const removedFriend = friends.shift()

console.log(removedFriend) // Karl
console.log(friends) // ['Mikenzi', 'Jake']
