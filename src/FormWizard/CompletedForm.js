import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form';
import validate from '../validation/validation';
import {
    Button,
    Card,
    CardBody,
    Col
} from 'reactstrap';

let CompletedForm = props => {
    const {
        firstName, lastName, email, phone, sNumber, sName, sType, sUrb, postCode
    } = props
    return (
        <form>
            <Col sm="12">
                <Card className="card-border">
                    <CardBody>
                        <Col xs="12" lg="6">
                            <div style={{ display: 'flex' }}>
                                <label class="col-sm-6" style={{ fontSize: '15px', fontWeight: 'bold' }}>First Name: </label>
                                <div class="col-sm-6" style={{ marginLeft: '50px', fontSize: '15px' }}>{firstName}</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="6">
                            <div style={{ display: 'flex' }}>
                                <label class="col-sm-6" style={{ fontSize: '15px', fontWeight: 'bold' }}>Last Name: </label>
                                <div class="col-sm-6" style={{ marginLeft: '50px', fontSize: '15px' }}>{lastName}</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="6">
                            <div style={{ display: 'flex' }}>
                                <label class="col-sm-6" style={{ fontSize: '15px', fontWeight: 'bold' }}>Email: </label>
                                <div class="col-sm-6" style={{ marginLeft: '50px', fontSize: '15px' }}>{email}</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="6">
                            <div style={{ display: 'flex' }}>
                                <label class="col-sm-6" style={{ fontSize: '15px', fontWeight: 'bold' }}>Phone: </label>
                                <div class="col-sm-6" style={{ marginLeft: '50px', fontSize: '15px' }}>{phone}</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="6">
                            <div style={{ display: 'flex' }}>
                                <label class="col-sm-6" style={{ fontSize: '15px', fontWeight: 'bold' }}>Street Number: </label>
                                <div class="col-sm-6" style={{ marginLeft: '50px', fontSize: '15px' }}>{sNumber}</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="6">
                            <div style={{ display: 'flex' }}>
                                <label class="col-sm-6" style={{ fontSize: '15px', fontWeight: 'bold' }}>Street Name: </label>
                                <div class="col-sm-6" style={{ marginLeft: '50px', fontSize: '15px' }}>{sName}</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="6">
                            <div style={{ display: 'flex' }}>
                                <label class="col-sm-6" style={{ fontSize: '15px', fontWeight: 'bold' }}>Street Type: </label>
                                <div class="col-sm-6" style={{ marginLeft: '50px', fontSize: '15px' }}>{sType}</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="6">
                            <div style={{ display: 'flex' }}>
                                <label class="col-sm-6" style={{ fontSize: '15px', fontWeight: 'bold' }}>Suburb: </label>
                                <div class="col-sm-6" style={{ marginLeft: '50px', fontSize: '15px' }}>{sUrb}</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="6">
                            <div style={{ display: 'flex' }}>
                                <label class="col-sm-6" style={{ fontSize: '15px', fontWeight: 'bold' }}>Postcode: </label>
                                <div class="col-sm-6" style={{ marginLeft: '50px', fontSize: '15px' }}>{postCode}</div>
                            </div>
                        </Col>
                    </CardBody>
                    <div style={{ paddingBottom: 30, marginLeft: 'auto' }}>
                        <Button color="primary" className="btn-pill pull-right" type="submit" style={{ marginRight: '20px' }}>
                            Go back to First Step &nbsp;
              <i className="fa fa-chevron-right" />
                        </Button>
                    </div>
                </Card>
            </Col>
        </form>
    );
};

CompletedForm.propTypes = {
    handleSubmit: PropTypes.func
};

CompletedForm = reduxForm({
    form: 'wizardForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(CompletedForm)
const selector = formValueSelector('wizardForm')
CompletedForm = connect(state => {
    const firstName = selector(state, 'firstName')
    const lastName = selector(state, 'lastName')
    const email = selector(state, 'email')
    const phone = selector(state, 'phone')
    const sNumber = selector(state, 'sNumber')
    const sName = selector(state, 'sName')
    const sType = selector(state, 'sType')
    const sUrb = selector(state, 'sUrb')
    const postCode = selector(state, 'postCode')
    return {
        firstName, lastName, email, phone, sNumber, sName, sType, sUrb, postCode
    }
})(CompletedForm)

export default CompletedForm

