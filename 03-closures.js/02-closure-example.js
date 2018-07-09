let birdCounter = () => {
  let count = 1
  let numberOfBirds = () => {
    count++
    console.log(`${count}  number of birds`)
  }
  return numberOfBirds
}

let dogCounter = () => {
  let count = 1
  let numberOfDogs = () => {
    console.log(`${count} number of dogs`)
  }
  return numberOfDogs
}

let numberOfBirds = birdCounter()
numberOfBirds()
numberOfBirds()
numberOfBirds()