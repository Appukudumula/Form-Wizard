import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setEmailFormData } from '../actions'

export class PersonalDetailsForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sNumber: '', sName: '', sType: '', sUrb: '', pCode: ''
    }
  }

  moveToNext = (next) => {
    let formObj = {
      fName: (this.props.formData && this.props.formData.fName) || '',
      lName: (this.props.formData && this.props.formData.lName) || '',
      eMail: (this.props.formData && this.props.formData.eMail) || '',
      phone: (this.props.formData && this.props.formData.phone) || '',
      sNumber: this.state.sNumber ? this.state.sNumber : (this.props.formData && this.props.formData.sNumber) || '',
      sName: this.state.sName ? this.state.sName : (this.props.formData && this.props.formData.sName) || '',
      sType: this.state.sType ? this.state.sType : (this.props.formData && this.props.formData.sType) || '',
      sUrb: this.state.sUrb ? this.state.sUrb : (this.props.formData && this.props.formData.sUrb) || '',
      pCode: this.state.pCode ? this.state.pCode : (this.props.formData && this.props.formData.pCode) || ''
    }
    this.props.setEmailFormData(formObj)
    if (!next) {
      this.props.previousPage()
    }
    else {
      this.props.onSubmit()
    }
  }

  render() {
    let personalFormObj = this.props.formData
    let sNumber = personalFormObj && personalFormObj.sNumber, sName = personalFormObj && personalFormObj.sName,
      sType = personalFormObj && personalFormObj.sType, sUrb = personalFormObj && personalFormObj.sUrb, pCode = personalFormObj && personalFormObj.pCode
    const { handlestreetNumber, handleStreetName, handleStreetType, handleSubUrb, handlePostCode } = this.props, labelStyle = { fontSize: '15px', fontWeight: 'bold', marginLeft: '400px', color: '#19651c' },
    textStyle = { width: '40%', height: '22px', marginLeft: '400px' }
    return (
      <form onSubmit={this.moveToNext} style={{ borderStyle: 'groove', borderRadius: '30px', backgroundColor: '#f2f2f2' }}>
        <div style={{ marginBottom: '20px', marginTop: '35px' }}>
          <label style={labelStyle}>Street Number: </label>
          <div style={{ display: 'flex' }}><input type="text" style={textStyle} value={this.state.sNumber || sNumber} placeholder="Enter Street Number" pattern="[0-9]+" onChange={handlestreetNumber.bind(this)} required />
            <p style={{ margin: '4px', fontWeight: 'bold' }}><i>Format: Accepts only numbers</i></p>
          </div>
        </div>
        <div style={{ marginBottom: '20px', marginTop: '35px' }}>
          <label style={labelStyle}>Street Name: </label>
          <div><input type="text" style={textStyle} value={this.state.sName || sName} placeholder="Enter Street Name" onChange={handleStreetName.bind(this)} required /></div>
        </div>
        <div style={{ marginBottom: '20px', marginTop: '35px' }}>
          <label style={labelStyle}>Street Type: </label>
          <div style={textStyle}>
            <select id="sType" name="sType" value={this.state.sType || sType} style={{ width: '100%' }} placeholder="Enter Street Type" onChange={handleStreetType.bind(this)} required>
              <option value="">Enter Street Type</option>
              <option value="CI">CI</option>
              <option value="Ct">Ct</option>
              <option value="St">St</option>
              <option value="PI">PI</option>
              <option value="Ave">Ave</option>

            </select></div>
        </div>
        <div style={{ marginBottom: '20px', marginTop: '35px' }}>
          <label style={labelStyle}>Suburb: </label>
          <div><input type="text" style={textStyle} value={this.state.sUrb || sUrb} placeholder="Enter Suburb" onChange={handleSubUrb.bind(this)} required /></div>
        </div>
        <div style={{ marginBottom: '20px', marginTop: '35px' }}>
          <label style={labelStyle}>PostCode: </label>
          <div style={{ display: 'flex' }}><input type="number" style={textStyle} value={this.state.pCode || pCode} placeholder="Enter Postcode" min="800" max="7999" onChange={handlePostCode.bind(this)} required />
            <p style={{ margin: '4px', fontWeight: 'bold' }}><i>Format: Accepts Postcode between 0800 and 7999</i></p>
          </div>
        </div>
        <input type="button" style={{ width: '5%', borderRadius: '15px', marginLeft: '400px', marginBottom: '15px' }} value="Previous" onClick={() => this.moveToNext(false)}></input>
        <input type="submit" style={{ width: '5%', borderRadius: '15px', marginLeft: '450px', marginBottom: '15px' }} value="Next" />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    formData: state && state.formObj
  }
}
export default connect(mapStateToProps, { setEmailFormData })(PersonalDetailsForm)