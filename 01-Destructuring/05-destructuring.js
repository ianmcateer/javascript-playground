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

  // destructure for the two colors

  const firstColor = game.suspects[0].color
  const secondColor = game.suspects[1].color

  var [{ color: firstColor}, {color: secondColor}] = suspects