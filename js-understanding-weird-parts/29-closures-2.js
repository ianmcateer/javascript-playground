function buildFunctions() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    // this isnt invoking the function
    // its just creating it
    arr.push(function() {
      console.log(i);
    });
  }
  // the value of i by the time we hit return statement is 3
  return arr;
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();

// it only looks at i when it is executed
