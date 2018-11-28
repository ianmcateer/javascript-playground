// Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.
//_.get(object, path, [defaultValue])
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

//---------------------------------------------//

const subconnectionTypes = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const connection = {
  id: "5bfe",
  subconnections: [
    {name: 'subcon 1'},
    {name: 'subcon 2'}
    ]
}

const getSubconnection = (connection, type) => {
  return _.get(
    connection,
    type === subconnectionTypes.PRIMARY ? 'subconnections[0]' : "subconnections[1]"
  )
}

const primarySub = getSubconnection( connection, subconnectionTypes.PRIMARY );

console.log('primarySub:', primarySub)


