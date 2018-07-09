// arrays passed by reference
const notes = ['note 1', 'note 2', 'note 3']

// add somehting onto end 
notes.push('note4')

// add element to beginning of arrat
notes.unshift('my first note')
console.log(notes)

// start at index of 1 and remove one item
notes.splice(1, 1)
console.log(notes)

// can use splice to add a new item 
notes.splice(1,0 , 'this is the new second item')
console.log(notes)

//  also to replace a note
notes.splice(1,1, 'this is the new second item')