const game = {
  'suspects': [
    {
      name: 'Rusty',
      color: 'orange'
    },
    {
      name: 'kiss scarlet',
      color: 'red'
    },
  ]
}
// loop through nested array 
for (let i = 0; i < game.suspects.length; i ++) {
  console.log(game.suspects[i])
}

// for (let key in game) {
//   console.log(game[key])
// }

// loop through all properties of suspect objects and mark them if you think they are guilty

function gameLoop () {
  // loop through array of objects
  for (let i = 0; i < game.suspects.length; i ++){
    // loop through each key/property in object[i]
    for (let key in game.suspects[i]){
      if (game.suspects[i][key] === 'Rusty' ) {
        console.log(`found him`)
      } else {
        console.log(`next time`)
      }
    }
  }
}
gameLoop()