import React, { Component } from 'react'
import { connect } from 'react-redux'

export class CompletedForm extends Component {

    render() {
        const firstName = (this.props.formData && this.props.formData.fName) || '',
            lastName = (this.props.formData && this.props.formData.lName) || '',
            email = (this.props.formData && this.props.formData.eMail) || '',
            phone = (this.props.formData && this.props.formData.phone) || '',
            sNumber = (this.props.formData && this.props.formData.sNumber) || '',
            sName = (this.props.formData && this.props.formData.sName) || '',
            sType = (this.props.formData && this.props.formData.sType) || '',
            sUrb = (this.props.formData && this.props.formData.sUrb) || '',
            postCode = (this.props.formData && this.props.formData.pCode) || '',
            labelStyle = { width: '100%', fontSize: '15px', fontWeight: 'bold', marginLeft: '400px', color: '#19651c' },
            textStyle = { width: '100%', fontSize: '15px', marginLeft: '-500px' },
            divStyle = { display: 'flex', marginBottom: '20px', marginTop: '25px' }
        return (
            <form style={{ borderStyle: 'groove', borderRadius: '30px', backgroundColor: '#f2f2f2' }}>
                <div class="container-fluid">
                    <div class="row" style={{ display: 'flex', marginBottom: '20px', marginTop: '35px' }}>
                        <div class="col-sm-3" style={labelStyle}>First Name:</div>
                        <div class="col-sm-9" style={textStyle}>{firstName}</div>
                    </div>

                    <div class="row" style={divStyle}>
                        <div class="col-sm-3" style={labelStyle}>Last Name:</div>
                        <div class="col-sm-9" style={textStyle}>{lastName}</div>
                    </div>

                    <div class="row" style={divStyle}>
                        <div class="col-sm-3" style={labelStyle}>Email:</div>
                        <div class="col-sm-9" style={textStyle}>{email}</div>
                    </div>

                    <div class="row" style={divStyle}>
                        <div class="col-sm-3" style={labelStyle}>Phone:</div>
                        <div class="col-sm-9" style={textStyle}>{phone}</div>
                    </div>

                    <div class="row" style={divStyle}>
                        <div class="col-sm-3" style={labelStyle}>Street Number:</div>
                        <div class="col-sm-9" style={textStyle}>{sNumber}</div>
                    </div>

                    <div class="row" style={divStyle}>
                        <div class="col-sm-3" style={labelStyle}>Street Name:</div>
                        <div class="col-sm-9" style={textStyle}>{sName}</div>
                    </div>

                    <div class="row" style={divStyle}>
                        <div class="col-sm-3" style={labelStyle}>Street Type:</div>
                        <div class="col-sm-9" style={textStyle}>{sType}</div>
                    </div>

                    <div class="row" style={divStyle}>
                        <div class="col-sm-3" style={labelStyle}>Suburb:</div>
                        <div class="col-sm-9" style={textStyle}>{sUrb}</div>
                    </div>

                    <div class="row" style={divStyle}>
                        <div class="col-sm-3" style={labelStyle}>Postcode:</div>
                        <div class="col-sm-9" style={textStyle}>{postCode}</div>
                    </div>
                    <input type="submit" style={{ width: '10%', borderRadius: '15px', marginLeft: '900px', marginBottom: '15px' }} value="Go Back to First Form" />
                </div>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        formData: state && state.formObj
    }
}
export default connect(mapStateToProps, {})(CompletedForm)

