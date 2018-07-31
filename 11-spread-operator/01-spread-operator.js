const address = {
  city: 'brisbnane',
  postcode: 4228,
  country: 'australia'
}

const name = {
  firstName: 'ian',
  lastName: 'Mcateer'
}

const person = {
  city: address.city,
  country: address.country
}

const person2 = {...address, ...name}
console.log(person2)


