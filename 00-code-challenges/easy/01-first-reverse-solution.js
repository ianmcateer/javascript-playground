function FirstReverse(str) {
  // code goes here
  // .split method is used to split a string into an array of substrings and returns new array
  // reverse reverses order elements in an array
  // join joins the elments of an array into a string and returns the string
  str = str.split('').reverse().join('')
  return str;
}

// keep this function call here
const result = FirstReverse('hello world');
console.log(result)

module.exports = FirstReverse


