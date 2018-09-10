Array.prototype.custom = 'cool'

var arr = ['john','jane','jim']

for (var prop in arr){
  console.log(prop, arr[prop])
}

// 0 john
// 1 jane
// 2 jim


// dont use for in bc iterates over all proeprties - use standard for loop
