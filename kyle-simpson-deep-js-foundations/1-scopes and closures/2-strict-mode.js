"use strict";

var foo = "bar";

function bar() {
  var foo = "bar";

  function baz(foo) {
    foo = "bam";
    bam = "yay";
  }
  baz();
}

function baz(foo) {
  foo = "bam";
  bam = "yay";
}

bar();
foo;
bam;
baz();
