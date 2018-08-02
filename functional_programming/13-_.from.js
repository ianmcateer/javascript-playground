// takes array like object and returns an array
const _ = {}

_.from = function (array) {
  return Array.prototype.slice.call(arr)
}

Array.from([1,2,3])