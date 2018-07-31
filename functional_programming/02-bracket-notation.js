var person = []
person.name = "Mrs White"

var who = person.name
person[0] = "i was not in the billiard room"

person["plea"] = 'i would never'

// dot notation coerces it into a string
// why does person.0 not work
// because its invalid syntax

var game = {}
game.murderer = '???'
game['weapons'] = ['knife', 'gun']

// use arrays for similar kind of data eg all weapons

game["weapons"] = [
  {type: "knife", location: 'kitchen'}, 
  {type: "gun", location: 'billiard room'}
];

game.name= []
game.name[0] = 'Miss Scarlett'
game.name.push('mr green')

// dot sused for strings
// brackets used for SVGStringList, numbers, variables, weird expressions