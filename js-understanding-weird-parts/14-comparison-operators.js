console.log(1 < 2 < 3)  //true
console.log(3 < 2 < 1)  //returns true

// operator precedence
// < operators have same precedence 
// left to right associativity
// means left gets run first (false < 1)
// what does an opearot try to do when given it a type it doesnt expect it tries to coerce
// false becomes 0

false == 0 // true
false === 0 // false