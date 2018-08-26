var foo = function bar() {
    var foo = "baz"

    function baz(foo){
        foo = bar
        foo
    }
    baz()
}

foo()
bar() //reference error because no bar in the gloabl scope

// foo referencing a function but thats not a function declaration 
// its a function expression
// what happens to bar identifier

// function expressions 
// error - no bar identifier in the global scope 

// lexical scoping review; like a building- top of building is global scope
// the looking for the marbles happens at compiled time- lexical scoping
// it is a fixed sort of thing