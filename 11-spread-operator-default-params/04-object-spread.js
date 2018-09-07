const userNames = { firstname: 'Robin', lastname: 'Wieruch' }; 
const age = 28;
const user = { ...userNames, age };
console.log(user);
// output: { firstname: 'Robin', lastname: 'Wieruch', age: 28 }