// function, method, class, constructor, module

// function expression
// starts with function, optional name, parameters, takes a body
// they are first class, may be passed as an argument to a function
// inherit from Function.prototype

// function statement 
function foo(){

}
// this expands to 
var foo = function foo(){}
// which further expands to 
var foo = undefined
foo = function foo(){}
// the assignment of the function is also hoisted

// function expression v statements
// if first token is function then statement

// best practices
// dont create functions in a loop- new function bject is created on every iteration
// if return and no expression then return value is undefined
// except for constructors, default return is this

// also get access to arguments and this- neither is recommended
// arguments is array like object
// this is a reference to the object of invocation

// four ways to invoke a function
// 1- method form- this will get bound to the object
// eg thisObject.methodName()
// 2- when function is called in function form- this is set to global object- ins trict mode it is undefined
// 3- construcotr form- this will refer to new object instance
// 4- apply form- enabls you to specify what this will be 