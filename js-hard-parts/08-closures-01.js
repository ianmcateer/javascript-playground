const outer = () => {
  let counter = 0
  const incrementCounter = () => {
    counter++
  }
  incrementCounter()
}
outer()   

// cant call increment counter here bc it was defined inside the function outer
// how to call it? we would have to return in 