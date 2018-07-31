// filter those who were present the night of the murder
  //  returns new array that will only contain values that return true  

const _ = {}
_.filter = (arr, cb) => {
  // create new array
  const storage = []
  // loop through each item in array
  for (let i = 0l i < arr.length; i++) {
    // if returns true, push into array
    if (cb(arr[i], i, arr) === true) {
      storage.push(arr[i])
    }
  }
  // return arr
  return storage
}