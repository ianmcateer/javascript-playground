// loop contains test condition as well as a block
{
  let count = 0;
  while (count < 10) {
    console.log(`you have ${count} seconds remaining`);
    count++;
  }
}


// if the test condition tests as false the next iteration will not run
{
  let customerCount = 10
  do {
    console.log('how may i help you?')
    console.log(`helping customer number ${customerCount}`);
    customerCount -= 1
  } while (customerCount > 0)
}

// whats the difference? 
// the test condition in the do while loop is tested before the first iteration