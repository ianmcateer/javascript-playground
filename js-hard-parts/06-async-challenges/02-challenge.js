// Write code that will log to the console "Interval Hello!" every 2 seconds(see setInterval).Use the given clearAllIntervals function to clear all the messages when you have this functionality working.

//   Next, modify your code so that the "Interval Hello!" messages will automatically stop after 10 seconds.

//     Then, modify your code again so that the "Interval Hello!" messages will automatically stop after 10 seconds without use of the clearAllIntervals function, and using clearInterval only once.Perform research if you are unsure how to do this.

setInterval(() => {
  console.log('interval hello')
}, 2000);

function clearAllIntervals() {
  for (let i = 0; i < 1000; i++) {
    clearInterval(i);
  }
}
console.log("End of Challenge 2");