// const createTuple = (a, b, c, d) => {
//   return [[a,b], [c,d]]
// }
const createTuple = (a, b, c, ...d) => {
  return [[a,b], [c,d]]
}

let result = createTuple('it', 'could', 'be', 'anyone', 'no one')

console.log(result)


// before used to use arguments keyword
const createTuple2 = function (a, b, c, d) {
  console.log(arguments)
  return [[a,b], [c,d]]
}

createTuple2('It','could','be','anyone')

