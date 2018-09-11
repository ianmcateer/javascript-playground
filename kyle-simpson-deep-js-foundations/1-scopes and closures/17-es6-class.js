class Foo{
  constructor(who){
    this.me = who
  }

  identify(){
    return "I am " + this.me
  }
}

var a1 = new Foo("a1")
var a2 = new Foo("a2")

a1.identify()
a2.identify()

class Bar extends Foo {
  speak(){
    alert("hello" + this.identify())
  }
  identify(){
    alert("hello" + super.identify())
  }
}

