var a = new Number(3)
// a is not a number- its an object
// Number.prototype

var a = new String('john')
// creates objects that contain primtitives

String.prototype.isLengthGreaterThan = function(limit){
  return this.length > limit
}

// dangerous aside- can be dangerous
var a = 3
var b = new Number(3)
a == b //true
a === b //false bc b is an object a is primtitive