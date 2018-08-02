const add = function (a, b = 2) {
  console.log(arguments) // logs 3
  return a + b
}

add(3)

// before...
// b = b || 2