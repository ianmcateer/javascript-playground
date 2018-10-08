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

var totalAmount = orders.reduce(function(sum, order){
  console.log(sum, order)
  return sum + order.amount
}, 0)


var scores = [89, 76, 47, 95]
// var initialValue = 0
// // var reducer = function (accumulator, item) {
// //   return accumulator + item
// // }
// // var total = scores.reduce(reducer, initialValue)
// // var average = total / scores.length

var total = scores.reduce(function(accumulator, item){
  return accumulator + sum
}, 0)
var average = total / scores.length

//////////////////////////////////////////////////////////////////////////////////
var votes = [
  'tacos',
  'pizza',
  'pizza',
  'tacos',
  'fries',
  'ice cream',
  'ice cream',
  'pizza'
]
var initialValue = {}
var reducer = function(tally, vote) {
  if (!tally[vote]) {
    tally[vote] = 1;
  } else {
    tally[vote] = tally[vote] + 1;
  }
  return tally;
}
var result = votes.reduce(reducer, initialValue) // {tacos: 2, pizza: 3, fries: 1, ice cream: 2}