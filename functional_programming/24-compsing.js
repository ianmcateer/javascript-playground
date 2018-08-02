// when you take two functions and you combine them
const consider = (name) => {
  return `i think it could be ${name}`
}

const exclaim = (statement) => {
  return `${statement.toUpperCase()}`
}

const blame = _.compose(consider, exclaim)
blame('you')
// it first passes it into exclaim 
// and then pass the return into consider
// the order matters