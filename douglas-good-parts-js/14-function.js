function funky(o) {
  o = null;
  return o
}

var x = [];
funky(x);
console.log(x)

// what is x? empty array