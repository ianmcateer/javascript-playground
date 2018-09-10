// reflection
// an object can look at itself, listing and changing its properties and emthods
// can use it to extend

var person = {
  firstName: "default",
  lastName: "default",
  getFullName: function() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
};

var john = {
  firstName: "john",
  lastName: "doe"
};

var jane = {
  address: '11 main street',
  getFormalFullName: function (){
    return this.lastName + this.firstName
  }
}

// dont do this ever only for demo!!
john.__proto__ = person;

for (prop in john) {
  console.log(prop)
}
// it prints out the getfullname as well 
// it prints out the objects proprotype as well
// what if want to know only the properties on the object itself?

for (prop in john) {
  if(john.hasOwnProperty(prop)){
    console.log(prop)
  }
}

// so can reflect on john object - can implemenet an idea
// many libraries build it themeselves bc its not built in- its called extend

// this composes or combines these objects and adds them to john
// this physically places them on the john object
_.extend(john, jane, jim)


