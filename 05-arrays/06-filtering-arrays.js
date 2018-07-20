// filtering arrays- create new array of objects with filtered items
const notes = [{
  title: 'my next trip',
  body: 'i would like to go to spain'
}, {
  title: 'habits to work on',
  body: 'excercise, eating a bit better'
}, {
  title: 'office modifications',
  body: 'get a new seat'
}]

// filter accepts upto three arguments
// return a boolean- if true item kept in new array, if false item not part of new array
const filteredNotes = notes.filter((element, index, array) => {
  const isTitleMatch = element.title.toLowerCase().includes('habits')
  const isBodymatch = element.title.toLowerCase().includes('eating')

  return isTitleMatch || isBodymatch
})

console.log(filteredNotes)