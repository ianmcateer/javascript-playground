const _ = require('lodash')

// _.merge(object, [sources])

// like assign
// for each property in source, check if that property is object itself - if it is then go down recursively
//and try to map each child object properties from source to destination
//this method mutates an object

// Defined within your component
const defaultSettings = {
  strictMode: true,
  formatting: {
    finalNewline: true,
    quotes: "double"
  },
  people: [{name: 'ian'}, {name: 'sarah'}]
}

// Provided by the developer using your component
const userSettings = {
  formatting: {
    quotes: "single"
  },
}

const mergedSettings = _.merge({}, defaultSettings, userSettings)
console.log(mergedSettings)

//if you intend to perform a deep merge of settings with your own default values user _.merge rather than _.assign
