// first class funcitons- funcitons that behave as objects
// funcitonal programming- think and code thinking about functions as objects

function mapForEach(arr, fn) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr 
}

var newArr = mapForEach([1, 2, 3], function(item) {
  return item * 2;
});

console.log(newArr);

// var arr1 = [1,2,3]
// console.log(arr1)

// var arr2 = []
// for (var i = 0; i < arr1.length; i++){
//   arr2.push(arr1[i] * 2)
// }

// console.log(arr2)
