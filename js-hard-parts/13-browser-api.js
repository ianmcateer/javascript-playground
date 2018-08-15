const printHello = () => {
  console.log('hello')
}
setTimeout(printHello, 0);
console.log('me first')

// in call stack only see the functions we run ourselves
// wont see a call to settimeout
// me first then we get hello

// its going to do something different
// new part

// js run in web browser- web browser api's/features/functionality
// one of those tools is a timer

// so creates a timer in web browser api- they are not part of javascript - pass the 0 and also the reference to the printHello function 
// has a column complete or not
// its been set up now so we continue with execution thread

// get the console log logging me first 
// in the background our timer compeltes in the background
// it pshes call to printhello to call stack and it executes