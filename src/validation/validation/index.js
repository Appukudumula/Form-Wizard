const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Name Required';
  }

  if (!values.phone) {
    errors.phone = 'Phone Required';
  } else if (values.phone && !/^([1-9]\d{9})$/i.test(values.phone)) {
    errors.phone = 'Invalid mobile number, must be 10 digits';
  }

  if (!values.lastName) {
    errors.lastName = 'Last Name Required';
  }

  if (!values.firstName) {
    errors.firstName = 'First Name Required';
  }

  if (!values.email) {
    errors.email = 'Email Required';
  }
  if (values.email && !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(values.email)) {
    errors.email = 'Email Id must be valid'
  }
  if (!values.sNumber) {
    errors.sNumber = 'Street Number Required';
  }
  if (values.sNumber && (/[^0-9]/).test(values.sNumber)) {
    errors.sNumber = 'Street Number must be a valid number';
  }
  if (!values.postCode) {
    errors.postCode = 'Postcode Required';
  }
  if (values.postCode && !(values.postCode >= 800 && values.postCode <= 7999)) {
    errors.postCode = 'Postcode must be in the inclusive range of 0800 - 7999';
  }

  return errors;
};

export default validate;
