// js is single threaded- synscronous 

// what if we need to wait some time before we need to execute some portions of code?eg wait for some data from an api/server

// condondrum - tension between wanting to delay some code execution but not wanting to block the thread from any further code running while we wait 

const printHello = () => {
  console.log('hello')
}

// setTimeout(printHello, 1000);
setTimeout(printHello, 0);
console.log('me first')

// need to understand web browser api/node background threads
// callback/message/task que
// event loop

// api just means there is some functionality or data out there that isnot available in my appllication but i can access it and interact with it - can interface with it 
// what functionality do our browsers gives us? that we can interface with 