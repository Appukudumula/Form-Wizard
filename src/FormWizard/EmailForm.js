import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validation/validation';
import FormInput from '../components/FormInput'
import {
  mobile,
  captialize
} from '../validation/normalize';
import {
  Button,
  Card,
  CardBody,
  Col
} from 'reactstrap';


const EmailForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form id="emailForm" onSubmit={handleSubmit}>
      <Col sm="12">
        <Card className="card-border">
          <CardBody>
            <Col xs="12" lg="6">
              <Field
                name="firstName"
                type="text"
                id="firstName"
                component={FormInput}
                label="First Name"
                inputPlaceHolder="Enter First Name"
                normalize={captialize}
              />
            </Col>
            <Col xs="12" lg="6">
              <Field
                name="lastName"
                type="text"
                component={FormInput}
                label="Last Name"
                inputPlaceHolder="Enter Last Name"
                normalize={captialize}
              />
            </Col>
            <Col xs="12" lg="6">
              <Field
                name="email"
                type="text"
                component={FormInput}
                label="Email"
                inputPlaceHolder="Enter Email"
              />
            </Col>
            <Col xs="12" lg="6">
              <Field
                name="phone"
                type="text"
                component={FormInput}
                label="Phone"
                inputPlaceHolder="Enter Phone"
                normalize={mobile}
              />
            </Col>
          </CardBody>
          <div style={{ paddingBottom: 30, marginLeft: 'auto' }}>
            <Button id="emailform-next" color="primary" className="btn-pill pull-right" type="submit" style={{ marginRight: '20px' }}>
              Next &nbsp;
              <i className="fa fa-chevron-right" />
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
};

EmailForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(EmailForm);
