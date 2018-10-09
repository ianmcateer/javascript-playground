// Creates a new array with the result of calling a provided function on every element in the original array.
// When should you use .map? I use it when I need to create a new array, based on a previous array.
// In the example below, I want to create a new array, tweetIds, based on the original array, tweets.


const tweets = [
  { id: 1, stars: 13, text: 'Turns out "git reset --hard HEAD^" was a terrible idea.' },
  { id: 2, stars: 87, text: 'Tech conferences are too expensive.' },
  { id: 3, stars: 51, text: 'Clean code is subjective. Optimize for deletion.' },
  { id: 4, stars: 19, text: 'Maybe the real benefit of open source was the friendships we made along the way?' },
]

const tweetIds = tweets.map((tweet) => tweet.id) // [1,2,3,4]
