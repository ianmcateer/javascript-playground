// rules:
// implicit binding- most common rule- when call a function - look to left of dot- thats what this keyword will reference
// explicit binding- bind, call, apply
// new binding- new keyword gives you empty object and sets the this keyword to point to that empty object
// window binding

// ask where is function being invoked??
const me = {
  name: 'ian',
  age: '25',
  sayName: function(){
    console.log(this.name)
  }
}
me.sayName()

const stacey = {
  name: 'stacey',
  age: 34
}

const sayTheName = function(lang1, lang2, lang3){
  console.log(`my name is ${this.name} and i know ${lang1} and ${lang2}`)
}

const languages = ['javascript', 'ruby', 'python']
//.call similar to .apply but apply accepts an array
sayTheName.call(stacey, languages[0], languages[1])
sayTheName.apply(stacey, languages)


// .bind- bind simialr to .call but returns a new function with this keyword bound
const newFn = sayTheName.bind(stacey, languages[0], languages[1])
newFn()
