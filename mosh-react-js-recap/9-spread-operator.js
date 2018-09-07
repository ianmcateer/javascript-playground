const first = [1,2,3]
const second = [4,5,6]

// old way
  // const combined = first.concat(second)

// spread operator
const combined = [...first, 'some new element', ...second]
console.log(combined)

// can easily clone an array
const clone = [...first]