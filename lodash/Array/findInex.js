const _ = require('lodash')
// This method is like _.find except that it returns the index of the first element
// predicate returns truthy for instead of the element itself.

const users = [
  { 'user': 'barney',
    'active': false
  },
  { 'user': 'fred',
    'active': false
  },
  { 'user': 'pebbles',
    'active': true
  }
];

const result = _.findIndex(users, (o) => o['user'] === 'fred')
console.log(result)
