// Iterates over elements of collection, returning an array of all elements predicate returns truthy for.
// The predicate is invoked with three arguments: (value, index|key, collection).

const _ = require('lodash')

const users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

const result1 = _.filter(users, (o) => o['user'] === 'barney')
console.log(result1, 'result1')

const result2 = _.filter(users, { 'age': 36, 'active': true });
console.log(result2, 'result2')

const result3 = _.filter(users, 'active')
console.log(result3, 'result3')
