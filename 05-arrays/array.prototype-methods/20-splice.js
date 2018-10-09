// Allows you to add and or remove items from anywhere inside of an array.
// It’s mutative so favor using another method that isn’t mutative like .slice, .map, .filter
// or the spread operator.

// The API is a bit funky as well. The first argument specifies where to start,
// the second argument specifies how many elements to remove, and the third argument
// specifies what to add.

const friends = ['Jake', 'Karl', 'Mikenzi']

const removedItems = friends.splice(1, 1, 'Jordyn')
// Start at index 1, remove 1 item then add Jordyn

console.log(removedItems) // ['Karl']
console.log(friends) // ['Jake', 'Jordyn', 'Mikenzi']
