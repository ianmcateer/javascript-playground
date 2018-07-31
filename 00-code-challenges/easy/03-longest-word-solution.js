function LongestWord(sen) {
  // convert to array for each word
  sen = sen.split(' ').sort((a,b) => b.length - a.length)
  // code goes here  
  return sen[0];

}

// keep this function call here 
let result = LongestWord('i really love dogs');
console.log(result)
