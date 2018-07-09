const teachersArray = [
  {name: 'nick', subject: 'english', age: 25},
  {name: 'sarah', subject: 'maths', age: 39},
  {name: 'ian', subject: 'p.e', age: 25},
]

for (let teacher of teachersArray) {
  console.log(teacher.name)
  if(teacher.name === 'sarah') {
    break
  }
}