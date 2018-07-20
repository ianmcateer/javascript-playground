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


const filters = {
  searchText: ''
}

const renderNotes = (notes, filters) => {
  // filter notes first
  document.querySelector('#notes-container').innerHTML = ''
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })
  filteredNotes.forEach((note) => {
    const p = document.createElement('p')
    p.textContent = note.title
    document.querySelector('#notes-container').appendChild(p)
  })
}
renderNotes(notes, filters)
// document.querySelector('button').addEventListener('click', (e) => {
//   e.target.textContent = 'the button was clicked'
// })

// document.querySelector('#add-todo').addEventListener('click',(e)=> {
//   // console.log('add new todo')
// })

// change or input can be used
document.querySelector('#search-text').addEventListener('input', (e) => {
  // console.log(e.target.value)
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#name-form').addEventListener('submit', (e) => {
  // prevent default beheviour of submit event- refreshing page with updated url
  e.preventDefault()
  console.log(e.target.elements.firstName.value)
})

document.querySelector('#for-fun').addEventListener('change', (e)=> {
  console.log(e.target.checked)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
  console.log(e.target.value)
})