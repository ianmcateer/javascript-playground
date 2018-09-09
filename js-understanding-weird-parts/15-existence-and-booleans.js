Boolean(undefined) //false
Boolean('') //false
Boolean(null) //false

var a = 0
if (a || a === 0){
  console.log('something is there')
}

// || has less precedence than ===
// (a || true)... (false||true)