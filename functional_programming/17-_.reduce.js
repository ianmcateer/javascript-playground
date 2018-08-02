// reduces collection to a value which is the result of running each element in collection

_.reduce([1,2], (sum, n) => {
  return sum + n
}, 0)
// returns 3

const reduce = function(list, cb, initial){
  let memo = initial
  for (let i = 0; i < list.length; i++) {
    if (i === 0 && !!memo){
      memo = list[0]
    } else {
      memo = cb(list[i], memo)
    }
  }
  return memo
}

reduce([1,2,3], (v, sum) => v + sum, 0)