const user1 = {
  name: 'will',
  score: 3,
  increment: function(){
    this.score++
    console.log(`score is now ${this.score}`)
  }
  // increment: () => {
  //   this.score++
  //   console.log(`score is now ${this.score}`);
  // }
}

user1.increment()

const user2 = {}
user2.name = "tim"
user2.score = 6
user2.increment = function () {
  user2.score++
}

const user3 = Object.create(null)
user3.name = 'ian'
user3.score = 9
user3.increment = function() {
  user2.score++;
};

// our code is getting repetitive
// what happens if we have 1 million users???