// hoisting- move to top of enclosing scope

let word = 'hello'

foo()

function foo ()  {
  console.log(word)
}