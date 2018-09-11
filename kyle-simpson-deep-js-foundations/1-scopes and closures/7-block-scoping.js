// downside to iife- change meaning of return value
// now have the ability in es6 for block scoping

// x 10 y 5
function diff(x,y){
  if(x > y){
    var tmp = x //tmp = 10  // now can use let
    x = y       // x = 5
    y = tmp     // y = 10
  }
  return y - x  // 10 - 5
}

