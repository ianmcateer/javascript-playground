// javascript object notation

var objectLiteral = {
  firstName: 'ian',
  lastName: 'mcateer'
}

console.log(objectLiteral)

// xml used to be used but too much data
// json- wrapped in quotes
// json has stricter rules

// js has built in functionality

const jsonValue = JSON.stringify(objectLiteral)

// taking stirng converting back to obj
JSON.parse(jsonValue)