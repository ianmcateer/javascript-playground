const notes = [{
  title: 'my next trip',
  body: 'i would like to go to spain'
}, {
  title: 'habits to work on',
  body: 'excercise, eating a bit better'
}, {
  title: 'office modifications',
  body: 'get a new seat'
}, {
  title: 'another example',
  body: "another note"
}]

// sort method bit more complex
// array.sort() by itself will sort by alphabetically Capitals then lowercase
// but it does take an optional compare function
// gets called with two elements from the array we are sorting 
// if a comes first retur -1, if a comes after b return 1
// if both idential order could return 0- order doesnt need to be changed

const sortedNotes = notes.sort((a, b) => {
  if (a.title < b.title) {
    return -1
  } else if (b.title < a.title) {
    return 1
  }
})

console.log(sortedNotes)