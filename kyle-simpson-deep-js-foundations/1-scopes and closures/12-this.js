// the only thing that detemrins what the this keyword is, is how the function was called, not where it was called or where it was defined

function foo(){
  console.log(this.bar)
}

var bar = "bar1"
// implicit binding
var o2 = {bar: "bar2", foo: foo}
foo()
o2.foo()

// there are four ways for a funciton to be called- a plain funciton call- this is the fourth rule- its the default binding- if a funciton doesnt match any other rules default the this keyword to the global object- in strict default is undefined

