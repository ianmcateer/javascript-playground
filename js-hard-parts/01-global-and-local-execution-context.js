// storing 3 in the num variable inside lgobal memory
// declaring function box with name multiplyby2
// 'will' stored in name
// thread of execution never goes into funciton unless you call the function
const num = 3
function multiplyBy2 (inputNumber){
    const result = inputNumber * 2
    return result 
}
const name = 'Will'

// global execution cntext: reading code line by line AND creating memory for pieces of data
// single threaded- do line by line - syncrhonously 

const output = multiplyBy2(4)

// when you call or execute a function you create a new execution comprising:
    // - the thread of execution 
    // - a local memory (variable enviornment) where anything defined in the function is stored