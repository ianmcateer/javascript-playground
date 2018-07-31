const videoData = [
  {
    name: 'Miss Scarlet',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false }
    ]
  },
  {
    name: 'Mrs. White',
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false }
    ]
  },
  {
    name: 'Reverend Green',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false }
    ]
  },
  {
    name: 'Rusty',
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false }
    ]
  },
  {
    name: 'Colonel Mustard',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false }
    ]
  },
  {
    name: 'Professor Plum',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false }
    ]
  }
];

// who was present that night?
// filter- return an array of these objects 

const _ = {}

_.filter = (list, callback) => {
  const storage = []
  for (let i = 0; i < list.length; i++) {
    if (callback(list[i],i,list) === true) {
      storage.push(list[i])
    }
  }
  return storage
}

// let test = [1,2,3,4]
// let results = _.filter(test, (element, index, list) => {
//   return element === 2
// })

const results = _.filter(videoData, (element, index, array) => {
  return element.present === true
})  

console.log(results)