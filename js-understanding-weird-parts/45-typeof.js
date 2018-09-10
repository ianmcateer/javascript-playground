var a = 3;
console.log(typeof 3);

var b = "hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d);  // weird
console.log(Object.prototype.toString.call(d))  //better

function Person(name){
  this.name = name
}
var e = new Person('jane')
console.log(e instanceof Person)  //true

console.log(typeof undefined)
console.log(typeof null)  //bug