// .from isn’t an array method on Array.prototype but instead is a static method on the Array class.
// So you access it with Array.from().

// .from is used to create a new array from an “array-like” or iterable object.
// The most common use case where you see an “array-like” object is with the “arguments” keyword inside of a function.

function sumArgs() {
  console.log(arguments)
  return arguments
    .reduce((total, ele) =>
      total + ele,
      0
    ) // Error!
}

sumArgs(1,2,3,4,5) // [1, 2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// Notice that arguments looks like an array, but it also has some extra properties on it.
// So it’s an “array-like” object.
//
//   Even though it’s “array-like”, that doesn’t mean it’s an instance of Array which
// means it doesn’t have access to the methods on Array.prototype.
//
//   This is where Array.from comes into play. We can pass our array-like object to
// Array.from and what we’ll get back is an actual instance of Array.
//


  function sumArgs() {
  return Array.from(arguments)
    .reduce((total, ele) => total + ele, 0)
}

sumArgs(1,2,3) // 6
