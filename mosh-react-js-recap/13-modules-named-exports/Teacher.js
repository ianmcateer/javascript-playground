import { Person } from "./Person";
// ./ indicates current folder


// named export
export function promote(){}

// named export
export default class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}

// obj defined in module are private by default
// teacher isnt visible to any other modules - to make it public we export it to the outside


// typically used default export if a single object taht we want to export
// class is an object in js- 