// reduce is not limited to reducing a list to a number
// it can reduce it to anything such as another array or an object

const fs = require('fs')
// import fs from 'fs'

const output = fs.readFileSync('22-text.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split('\t'))
  .reduce((customers, line ) => {
    console.log('hello', line)
    customers[line[0]] = []
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[4]
    })
    return customers
  }, {})

console.log('output', JSON.stringify(output, null, 2))
