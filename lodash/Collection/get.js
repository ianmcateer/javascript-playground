// Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.

const _ = require('lodash')

var user = {
  _id: '507f1f77',
  email: 'william.bratches@gmail.com',
  profile: {
    firstName: 'William',
    lastName: 'Bratches',
    birthDay: {
      month: 7,
      day: 2,
      year: 1991,
    }
  }
}

const result = _.get(user, 'profile.birthDay')

console.log(result, 'result')
