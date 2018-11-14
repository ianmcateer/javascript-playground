const _ = require('lodash')


const nextProps = {
  loggedInUsersCompany: 'company a'
}

const thisProps = {
  loggedInUsersCompany: 'company b'
}

const areTheyEqual = _.isEqual(nextProps, thisProps)
console.log(areTheyEqual)
