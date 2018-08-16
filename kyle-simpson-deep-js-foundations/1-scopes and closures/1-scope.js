// scope- where to look for things- an identifier - it belongs to some bucket or tentacle 

// js is a compiled language

// js- whne get error- gives an error before it even runs any line
// just in time compilation - simply down to two pass
// first pass - parses code/ compiles- sytax errors - early errors- validation of code - scoping happens 
// second pass that executes it 

"user strict"

var foo = 'bar'

function bar() {
    // these are different scopes
    // two differen variables of same name in different scopes- shaddowing 
    console.log(foo)    // this will log out undefined 
    // becauses its a two pass system 
    // window.foo
    // sometimes shadowing is what you want - you cannot access the one above(the one you shadowed)
    var foo = "baz"
}

function baz(foo) {
    foo = "bam"
    bam = "yay" // is this a declaration pass1- might be a var bam after
    // implicitly assigning to a global variable called bam - BAD!!!
}
baz()
console.log(foo)