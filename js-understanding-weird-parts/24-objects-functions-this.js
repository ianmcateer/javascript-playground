// when function invoked new execution context created
// also references outside envirnment 
// it also gives us the 'this'- will point to a different object depending on how the object is invoked

console.log(this) //global object

function a (){
  console.log(this)
}
a() // returns global object as well

var c = {
  name: 'the c object',
  log: function(){
    var self = this
    console.log(this)
    
    function setName(newName){ 
      self.name = newName // this points to global, problem!!!!
    }
    setName('updated again')
    console.log(this)
  }
}
c.log()
