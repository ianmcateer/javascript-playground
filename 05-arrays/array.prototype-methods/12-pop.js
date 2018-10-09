// Removes the last element from an array and returns it. Favor using .filter instead of .pop as mutations are 👺.
const friends = ['Jake', 'Mikenzi', 'Karl']

const removedFriend = friends.pop()

console.log(removedFriend) // Karl
console.log(friends) // ['Jake', 'Mikenzi']
