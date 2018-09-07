
// can also use it on objects
const first = {
  name: 'ian'
} 

const second = {
  job: 'software developer'
}

const combined = {
  ...first, ...second
}

console.log(combined) // { name: 'ian', job: 'software developer' }

// can also sue it to clone objects
const clone = {...first}