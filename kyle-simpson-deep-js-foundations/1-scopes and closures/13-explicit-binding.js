// .call or .apply explicit binding
// third rule

// function foo() {
//   console.log(this.bar);
// }

// var bar = "bar1";
// var obj = { bar: "bar2" };
// foo();
// // the first parm to call is used as the this binding
// // call foo and pass obj as the this binding
// foo.call(obj);

// not in contorl of how they are going to be invoked- losing this binding
// hard binding
// function foo() {
//   console.log(this.bar);
// }

// var obj = { bar: "bar" };
// var obj2 = { bar: "bar2" };

// var orig = foo;
// foo = function(){ orig.call(obj)}
// foo()
// foo.call(obj2)  //will ignore obj2

// .bind does this for us- a hard bound functions
function foo(baz, bam){
  console.log(this.bar + " " + baz + " " + bam)
}

const obj = {bar: "bar"}
foo = foo.bind(obj, "baz")
foo()
 


