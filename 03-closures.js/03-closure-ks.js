function add () {
  let x = 1
  function increment(){
    x += 1
    console.log(x)
  }
  return increment
}

let x = add()
x()
x()
x()