// each and map
// difference- each does not return anything
// map returns a new array of the same size every time

// returningundefined in this case
_.map([1,2,3], (v, i, list) => {
  console.log(v)
})  

// array of weapons
const weapons = [`candlestick`, 'lead pipe', 'revolver']

const makeBroken = (item) => {
  return `broken ${item}`
}

let suspectsList = _.map(weapons, (element, index, list) => {
  makeBroken(element)
})