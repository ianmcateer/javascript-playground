const _ = require('lodash')

let state = {
  error: null,
  isUpdatingUser: false,
  loggedInUser: {},
  loggedInUsersCompany: {},
  loggedInUsersToken: null,
  contextUser: {},
  entitlements: {},
  roles: [],
}

function loggedInUserRecieve(user){
  return _.merge({}, state, {loggedInUser: user})
}

const loggedInUser = {
  user: {
    error: null,
    isUpdatingUser: false,
    loggedInUser: {
      createdAt: '2018-09-19T03:33:37.839Z',
      updatedAt: '2018-11-01T01:56:55.980Z',
      username: 'ian-mcateer55',
      popIds: [],
      stats: {
        members: 0,
        interconnections: 0,
        followers: 1,
        following: 1,
        privateArticles: 0,
        privateEvents: 0,
        privatePosts: 0,
        articles: 0,
        events: 2,
        posts: 1,
        postsTotal: 1
      }
    }}}

    let newState = loggedInUserRecieve(loggedInUser)
    console.log(newState)

