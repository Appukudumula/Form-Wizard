import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setEmailFormData } from '../actions'

export class EmailForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fName: '', lName: '', eMail: '', phone: ''
    }
  }

  moveToNext = () => {
    let formObj = {
      fName: this.state.fName ? this.state.fName : this.props.formData.fName,
      lName: this.state.lName ? this.state.lName : this.props.formData.lName,
      eMail: this.state.eMail ? this.state.eMail : this.props.formData.eMail,
      phone: this.state.phone ? this.state.phone : this.props.formData.phone,
      sNumber: (this.props.formData && this.props.formData.sNumber) || '',
      sName: (this.props.formData && this.props.formData.sName) || '',
      sType: (this.props.formData && this.props.formData.sType) || '',
      sUrb: (this.props.formData && this.props.formData.sUrb) || '',
      pCode: (this.props.formData && this.props.formData.pCode) || ''
    }
    this.props.setEmailFormData(formObj)
    this.props.onSubmit()
  }
  render() {
    let formDetails = this.props.formData
    let fName = formDetails && formDetails.fName, lName = formDetails && formDetails.lName, eMail = formDetails && formDetails.eMail, phone = formDetails && formDetails.phone
    let { handleFirstName, handleLastName, handleEmail, handlePhone } = this.props, textStyle = { width: '40%', height: '22px', marginLeft: '400px' }
    return (
      <form onSubmit={this.moveToNext} style={{ borderStyle: 'groove', borderRadius: '30px', backgroundColor: '#f2f2f2' }}>
        <div style={{ marginBottom: '20px', marginTop: '35px' }}>
          <label style={{ fontSize: '15px', fontWeight: 'bold', marginLeft: '400px', 'color': '#19651c' }}>First Name: </label>
          <div><input type="text" style={textStyle} value={this.state.fName || fName} placeholder="Enter First Name" onChange={handleFirstName.bind(this)} required /></div>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '15px', fontWeight: 'bold', marginLeft: '400px', 'color': '#19651c' }}>Last Name: </label>
          <div><input type="text" style={textStyle} value={this.state.lName || lName} placeholder="Enter Last Name" onChange={handleLastName.bind(this)} required /></div>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '15px', fontWeight: 'bold', marginLeft: '400px', 'color': '#19651c' }}>Email: </label>
          <div><input type="email" style={textStyle} value={this.state.eMail || eMail} placeholder="Enter Email" onChange={handleEmail.bind(this)} required /></div>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '15px', fontWeight: 'bold', marginLeft: '400px', 'color': '#19651c' }}>Phone: </label>
          <div style={{ display: 'flex' }}><input type="tel" style={textStyle} value={this.state.phone || phone} id="phone" name="phone" placeholder="Enter Phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={handlePhone.bind(this)} required />
            <p style={{ margin: '4px', fontWeight: 'bold' }}><i>Format: 123-123-1234</i></p>
          </div>
        </div>
        <input type="submit" style={{ width: '5%', borderRadius: '15px', marginLeft: '900px', marginBottom: '15px' }} value="Next" />
      </form>
    );
  }
}
function mapStateToProps(state) {
  return {
    formData: state && state.formObj
  }
}
export default connect(mapStateToProps, { setEmailFormData })(EmailForm)
