// more natural ot prototype model than new
// creates a new object and then sets its prototyoe to a certain object
const cat = {
  init: function(sound){
    this.sound = sound
  },
  makeSound: function(){
    console.log(this.sound)
  }
}

const mark = Object.create(cat)
mark.init('weooofff')
mark.makeSound()

console.log('is mark a cat?', cat.isPrototypeOf(mark))

// mark is new object that dont have makeSound themselves