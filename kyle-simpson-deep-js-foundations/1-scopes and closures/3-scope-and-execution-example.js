// compile first and then execute it 
var foo = bar

function bar() {
    var foo = "baz"

    function baz(foo) {
        foo = "bam"
        bam = "yay"
    }
    baz()
}

bar()
foo
bam
baz()
// baz never formally declared - error 
// looking for variables - but it is a compiled time- lexical scoping is compiler type operation 
// lexical scope is fixed