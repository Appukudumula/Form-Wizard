import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validation/validation';
import FormInput from '../components/FormInput';
import {
  Button,
  Card,
  CardBody,
  Col
} from 'reactstrap';

const PersonalDetailsForm = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Col sm="12">
        <Card className="card-border">
          <CardBody>
            <Col xs="12" lg="6">
              <Field
                name="sNumber"
                type="text"
                component={FormInput}
                label="Street Number"
                inputPlaceHolder="Enter Street Number"
              />
            </Col>
            <Col xs="12" lg="6">
              <Field
                name="sName"
                type="text"
                component={FormInput}
                label="Street Name"
                inputPlaceHolder="Enter Street Name"
              />
            </Col>
            <Col xs="12" lg="6">
              <label>Street Type</label>
              <div style={{ paddingBottom: '10px' }}>
                <Field name="sType" component="select" className='form-control'>
                  <option selected="selected" value="CI">CI</option>
                  <option value="Ct">Ct</option>
                  <option value="St">St</option>
                  <option value="PI">PI</option>
                  <option value="Ave">Ave</option>
                </Field>
              </div>
            </Col>
            <Col xs="12" lg="6">
              <Field
                name="sUrb"
                type="text"
                component={FormInput}
                label="Suburb"
                inputPlaceHolder="Enter Suburb"
              />
            </Col>
            <Col xs="12" lg="6">
              <Field
                name="postCode"
                type="text"
                component={FormInput}
                label="Postcode"
                inputPlaceHolder="Enter Postcode"
              />
            </Col>
          </CardBody>
          <div style={{ paddingBottom: 30, marginLeft: 'auto' }}>
            <Button color="primary" className="btn-pill pull-left" onClick={previousPage} style={{ marginLeft: '20px' }}>
              <i className="fa fa-chevron-left" />
                &nbsp; Previous
            </Button>
            <Button color="primary" className="btn-pill pull-right" type="submit" style={{ marginRight: '20px' }}>
              Next &nbsp;
              <i className="fa fa-chevron-right" />
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
};

PersonalDetailsForm.propTypes = {
  handleSubmit: PropTypes.func,
  previousPage: PropTypes.func
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(PersonalDetailsForm);
