const address = {
  street: 'some street',
  city: 'some city',
  country: 'australia'
}

// repetitive
  // const street = address.street
  // const city = address.city

  const { street, city, country } = address
  console.log(street, city, country)

  // can also rename while we destructur
  const { city: cityRenamed} = address  

console.log(cityRenamed)