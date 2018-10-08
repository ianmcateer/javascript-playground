// iterates over collection eturning the first element returns truthy
// _.find(collection, [predicate=_.identity], [fromIndex=0])
var _ = require('lodash')

var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
];

const result = _.find(users, function(o) { return o.age < 40; });
// => object for 'barney'
console.log(result) //{ user: 'barney', age: 36, active: true }
