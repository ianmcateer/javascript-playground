// two rules for asynchonous code
// hold each deferred function in a que(the callback que) when the api completes
// add the function to the callstack ONLY when the callstack is totally empty- an event loop checks this condition

// the challenges URL below 
// https://jsbin.com/hijijag/1/edit?js,console,output

function printHello(){
  console.log('hello')
}
function blockForOneSec(){
  // blocks in js thread for one sec
}

setTimeout(printHello, 0);
blockForOneSec()
console.log('me first')

// once timer finished push the code inside the timer to the callback que
// the que is waiting for some condition in call stack- th condiiton is if the cll stack is empty- will not add anything from callback que to callstack until my callstack is empty and my execution context including global is empty