// primitive value
// references a location in memory

let a = 3
b = a
// b gets a copy of a - it is passed by value

// objects passed by reference
// /points to the same location/address in memory
var c = {greeting: 'hi'}
var d 

d = c
// if points d to the same address that c points to 
// they point to the same spot in memory
// if mutate c you mutate d