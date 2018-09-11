var foo = '123'
var baz = parseInt(foo, 10) //not coercion

bar = Number(foo) //better
baz

baz = +foo  // also coerces to a number, but not an explicit coercion for some people
baz;

baz = 456
foo = baz.toString()  // implicitly explicit
foo;

foo = String(baz) //explicit- preferable
foo