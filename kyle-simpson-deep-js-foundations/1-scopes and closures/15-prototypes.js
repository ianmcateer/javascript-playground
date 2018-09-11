// objects are built by constructor calls- eg new keyword
// a constructor call makes an object linked to its own prototype
// class like blueprint and building- copy not linked- but js doesnt do copying

function Foo(who) {
  this.me = who;
}
Foo.prototype.identify = function() {
  return "I am " + this.me;
};

var a1 = new Foo("a1");
var a2 = new Foo("a2");

a2.speak = function() {
  console.log("hello " + this.identify() + ".");
};

a1.constructor = Foo;
a1.constructor === a2.constructor
a1.__proto__ === Foo.prototype
a1.__proto__ === a2.__proto__

a1.__proto__ === Object.getPrototypeOf(a1)

// a2.constructor.prototype //old way - hack