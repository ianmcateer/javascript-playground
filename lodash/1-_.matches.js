var _ = require('lodash');

// Creates a function that performs a partial deep comparison between a given object and source, returning true if the given object has equivalent property values, else false.

const objects = [
  { 'a': 1, 'b': 2, 'c': 3 },
  { 'a': 4, 'b': 5, 'c': 6 }
];

_.filter(objects, _.matches({ 'a': 4, 'c': 6 }));