// Returns the index of a particular value. If that value doesn’t exist in the array, it returns -1.

const friends = ['Jake', 'Mikenzi', 'Jacob']

friends.indexOf('Jake') // 0
friends.indexOf('Karl') // -1

let result = friends.findIndex(friend => friend === 'Jake')
console.log(result)
