// higher order functions takes a function as input
// returns a function as output
// callbacks are functions we pass to functions

const ifElse = function (condition, isTrue, isFalse) {
  return condition ? isTrue() : isFalse();
  // return condition ? isTrue : isFalse;
};

ifElse(
  true,
  () => {
    console.log(true);
  },
  () => {
    console.log(false);
  }
);

//   passing arguents to functions
var increment = (n) => {return n + 1}
const square = (n) => {return n * n}
doMathSoIDontHaveTo = (n, func) => {return func(n)}


console.log(doMathSoIDontHaveTo(5, square))