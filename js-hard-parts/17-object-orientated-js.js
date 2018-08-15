// easy to add
// performant
// easy for us to reasonabout 

name: 'will'
score: 5
name: 'tim'
score: 6

// functionality- ability to increase score
// what would be the best way to store this data and functionality?

const user1 = {
  name: 'will',
  score: 3,
  increment: function () {
    user1.score++
  }
}

user1.increment()

// encapsulation- binding together the data and functions that manipulate the data 