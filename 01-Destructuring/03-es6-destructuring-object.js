const person = {
  name: 'andrew',
  age: 26,
  location: {
    city: 'australia',
    temp: 92
  }
}

const { name, age } = person
console.log(`${name} is ${age}`)



const { city, temp: temperature } = person.location
if (person.location.city && person.location.temp) {
  console.log(`its ${temperature} outside`);
}
