import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stepper from 'react-stepper-horizontal';
import EmailForm from './EmailForm';
import PersonalDetailsForm from './PersonalDetailsForm';
import CompletedForm from './CompletedForm';
import { connect } from 'react-redux';


class MainForm extends Component {

  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 0,
      steps: [
        { title: 'Personal Details' },
        { title: 'Address Details' },
        { title: 'Completed Details' }
      ]
    };
  }

  handlestreetNumber(event) {
    this.setState({ sNumber: event.target.value });
  }
  handleStreetName(event) {
    this.setState({ sName: event.target.value });
  }
  handleStreetType(event) {
    this.setState({ sType: event.target.value });
  }
  handleSubUrb(event) {
    this.setState({ sUrb: event.target.value });
  }
  handlePostCode(event) {
    this.setState({ pCode: event.target.value });
  }
  handleFirstName(event) {
    this.setState({ fName: event.target.value });
  }
  handleLastName(event) {
    this.setState({ lName: event.target.value });
  }
  handleEmail(event) {
    this.setState({ eMail: event.target.value });
  }
  handlePhone(event) {
    this.setState({ phone: event.target.value });
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { page, steps } = this.state;
    return (
      <div style={{ backgroundColor: 'white' }}>
        <Stepper steps={steps} activeStep={page} />
        {page === 0 && (
          <EmailForm
            onSubmit={this.nextPage}
            handleFirstName={this.handleFirstName}
            handleLastName={this.handleLastName}
            handleEmail={this.handleEmail}
            handlePhone={this.handlePhone} />
        )}
        {page === 1 && (
          <PersonalDetailsForm
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
            handlestreetNumber={this.handlestreetNumber}
            handleStreetName={this.handleStreetName}
            handleStreetType={this.handleStreetType}
            handleSubUrb={this.handleSubUrb}
            handlePostCode={this.handlePostCode}
          />
        )}
        {page === 2 && (
          <CompletedForm
          />
        )}
      </div>
    );
  }
}

MainForm.propTypes = {
  onSubmit: PropTypes.func
};

export default connect()(MainForm);
