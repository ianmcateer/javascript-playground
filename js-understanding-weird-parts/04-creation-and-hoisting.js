console.log(a)
var a = 'hello world' //gets set to undefined

b() // this will work if it is a function statement 
// it was hoisted

function b (){
  console.log('called b')
}

// execution context- sets up memory space for variables and functions- hoisitng

// undefined is a special value- means that the variable hasnt been set
// never set a value ot undefined