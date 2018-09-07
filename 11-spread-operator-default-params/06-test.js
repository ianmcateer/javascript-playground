const state = [
  {
    id: 1,
    value: 4
  },
  {
    id: 2,
    value: 5
  },
  {
    id: 3,
    value: 6
  }
];

// muting state directly!
// const clonedArray = [...state]
// clonedArray[0].value++
// console.log(clonedArray)
// console.log(state)

const clonedArray = [...state]
const clonedObj = {...clonedArray[0]}
clonedObj.value++
console.log(state)
console.log(clonedArray)
console.log(clonedObj)