// used to merge two or more arrays- doesnt mutate the original array but returns a new array

const oldFriends = ['jake','mikenzi','jessic']
const newFriends = ['merrick','cash']

const allFriends = oldFriends.concat(newFriends)
console.log(allFriends, 'all friends')

// commonly used in react because dont want to mutate the state
addFriend(friend){
  this.setState(function(prevState){
    return {
      friends: prevState.concat([friend])
    }
  })
}
