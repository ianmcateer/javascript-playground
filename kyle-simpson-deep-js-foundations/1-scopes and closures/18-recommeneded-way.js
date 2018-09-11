var Foo = {
  init: function(who){
    this.me = who
  },
  identify: function(){
    return "I am " + this.me
  }
}

// creates a new Bar object- ussing an existing object to provide the newly created objects __proto__
var Bar = Object.create(Foo)

Bar.speak = function(){
  alert("hello, " + this.identify() + ".")
}

var b1 = Object.create(Bar)
b1.init("b1")
b1.speak()