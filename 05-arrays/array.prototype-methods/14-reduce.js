// .reduce holds the keys to the universe.
//   If you master it, you’ll be able to do pretty much anything you want with arrays.
//   Before you even look at the API, it’s important to understand why .reduce exists.
//   The idea of .reduce is that you can take an array and transform it into anything else -
//   another array, an object, a integer, literally anything. Why would you ever want to do that?
//   Look at every single example on this whole page. In every one we’re taking an array and transforming it in some way
// - mostly to another array. Let’s look at some other common ways you’d transform an array.

// [
//   { name: 'Tyler', age: 28},
//   { name: 'Mikenzi', age: 26},
//   { name: 'Blaine', age: 30 }
// ] -> Just the names -> ['Tyler', 'Mikenzi', 'Blaine']
//
// // ---
//
//   [
//     { name: 'Tyler', age: 28},
//     { name: 'Mikenzi', age: 26},
//     { name: 'Blaine', age: 30 }
//   ] -> Length and age count -> { users: 3, ageTotal: 84}
//
// // ---
//
//   [
//     { id: 1, stars: 13, text: 'Turns out "git reset --hard HEAD^" was a terrible idea.' },
//     { id: 2, stars: 87, text: 'Tech conferences are too expensive.' },
//     { id: 3, stars: 51, text: 'Clean code is subjective. Optimize for deletion.' },
//     { id: 4, stars: 19, text: 'Maybe the real benefit of open source was the friendships we made along the way?' },
//   ]
// // -> Remove the stars property ->
//   [
//     { id: 1, text: 'Turns out "git reset --hard HEAD^" was a terrible idea.' },
//     { id: 2, text: 'Tech conferences are too expensive.' },
//     { id: 3, text: 'Clean code is subjective. Optimize for deletion.' },
//     { id: 4, text: 'Maybe the real benefit of open source was the friendships we made along the way?' },
//   ]

//
// 1) Am I transforming an array into another array
// just by removing some elements? Use .filter
//
//   2) Am I transforming an array into another array? Use .map
//
//   3) Am I transforming an array into something other
// than another array? Use .reduce

const result = [1,2,3].reduce((accumulator, num) => {
  return accumulator + num
}, 0)

console.log(result)
//reduece takes two arguments, callback function and an initial value
//the callback takes two arguments- the first is accumulator the second is the current value


//The next thing we need to figure out is total. This is where it gets a little mind bendy. In our example, total is going to initially be 0, since that’s what we set our initial value to. After that, total is going to be whatever the previous iteration returned.
function sum (arr) {
  return arr.reduce((total, num) => {
    console.log(total)
    return Date.now()
  }, 0)
}

sum([1,2,3])

/////////////////////////////////////////////////
// converting array of objects into another object
 const users =  [
    { name: 'Tyler', age: 28},
    { name: 'Mikenzi', age: 26},
    { name: 'Blaine', age: 30 }
  ]

const result = users.reduce((data, user) => {
  data.users += 1
  data.ageTotal += 1
  return data
},{users: 0, ageTotal: 0})


