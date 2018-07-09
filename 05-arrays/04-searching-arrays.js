const notes = [{}, {
  title: 'my next trip',
  body: 'i would like to go to spain'
}, {
  title: 'habits to work on',
  body: 'excercise, eating a bit better'
}, {
  title: 'office modifications',
  body: 'get a new seat'
}]

const findNote = (notes, noteTitle) => {
  const index = notes.findIndex((note, index) => {
    return note.title === noteTitle
  })
  // returns -1 or index
  return index
}

findNote(notes, 'office modifications')


// find returns value of the element if found, otherwise returns undefined
const findNote2 = (notes, noteTitle) => {
  // returns the note or undefined if not found
  return notes.find((note, index) => {
    return note.title === noteTitle
  })
}
console.log(findNote2(notes, 'office modifications'))


// filter takes upto three arguments