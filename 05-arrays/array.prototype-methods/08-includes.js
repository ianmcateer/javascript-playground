// Determines if a particular value is found in an array.
// Note: We used to use indexOf for this same behavior but as of ES6, includes is more intuitive.

const friends = ['Jake', 'Mikenzi', 'Jacob']

friends.includes('Jake') // true
friends.includes('Karl') // false
