// closure is when a function rmemebers its lexical scope even when the function is executed outside that lexical scope

function foo(){
  var bar = "baz"

  return function(){
    console.log(bar)
  }
}

function bam(){
  foo()()
}

bam()

// the inner function was closed over that variable bar- going to preserve it and not allow it to be garbage collected

function foo(){
  var bar = "bar"

  setTimeout(function(){
    console.log(bar)
  }, 3000)
}

// click handlers also creates closure