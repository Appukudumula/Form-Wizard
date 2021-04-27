import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stepper from 'react-stepper-horizontal';
import { Card } from 'reactstrap';
import EmailForm from './EmailForm';
import PersonalDetailsForm from './PersonalDetailsForm';
import CompletedForm from './CompletedForm';

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

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { page, steps } = this.state;
    return (
      <Card>
        <Stepper steps={steps} activeStep={page} />
        {page === 0 && <EmailForm onSubmit={this.nextPage} />}
        {page === 1 && (
          <PersonalDetailsForm
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 2 && (
          <CompletedForm
          />
        )}
      </Card>
    );
  }
}

MainForm.propTypes = {
  onSubmit: PropTypes.func
};

export default MainForm;
