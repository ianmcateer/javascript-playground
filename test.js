const sayHello = () => {
  console.log('hello')
}
const sayHello2 = () => {
  console.log('hello 2')
}

const hardWorker = () => {
  const arr = []
  const count = 4
  for (let i = 0; i<count; i++ ){
    console.log(i)
    arr.push(i)
  }
  console.log(`finished`)
}
hardWorker()
setTimeout(sayHello2, 5000);
setTimeout(sayHello, 0);
console.log('me first')