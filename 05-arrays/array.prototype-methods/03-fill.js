// fill “fills all the elements of an array from a start index to an end index with a static value”. It sounds pretty useless, but I’ve found one scenario where it’s actually pretty helpful.

Array(10).fill().map(() => {
  return doThing()
})
