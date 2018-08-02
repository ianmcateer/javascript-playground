// what is reduce?
// map filter reject find are all tranfomrations
// but they are all specific
// reduce can be used to express any list transformation

const orders = [
  {amount: 250},
  {amount: 400},
  {amount: 100},
  {amount: 325},
]

// var totalAmount = 0
// for (let i = 0; i < orders.length; i++){
//   totalAmount += orders[i].amount
// }

// reduce is a function on the array object- takes a callback functions
// it wants an object at the end- starting point of sum - o
// this will be passed as first argument to the reduce function
// reduce will recieve element as second argument
// going to take the sum we reieve - the intitial value and we are going to add the order amount to it 
// this return value will be passed as the sum in the next iteration
// and keeps going until we are finished
var totalAmount = orders.reduce((sum, element) => {
  console.log(sum, element)
  return sum + element.amount
}, 0)

console.log(totalAmount)