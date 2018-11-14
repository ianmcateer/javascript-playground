state = {
  portForm: {
    portSpeed: '1000',
    paymentType: 'creditCard',
    portName: '',
    acceptedTerms: false,
  }
}

let newState = {}
const onChangeForm = (field, value) => {
  newState = {...state.portForm, [field]: value}
}

onChangeForm('portName', 'ian')
console.log(newState)
