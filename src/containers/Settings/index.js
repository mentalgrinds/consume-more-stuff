import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { editUser,editPassword } from '../../actions/users.js';
import ChangePassword from '../../components/ChangePassword';
import ChangeEmail from '../../components/ChangeEmail';
const validator = require("email-validator");

class Settings extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentPassword: '',
      newPassword: '',
      matchedPassword: '',
      matched: false,
      valid: false,
      email: '',
      redirect: false
    }

    this.handleCurrentPassword = this.handleCurrentPassword.bind(this);
    this.handleNewPassword = this.handleNewPassword.bind(this);
    this.handleMatchedPassword = this.handleMatchedPassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
  }

  handleCurrentPassword(event){
    this.setState({
      currentPassword: event.target.value
    })
  }
  handleNewPassword(event){
    this.setState({
      newPassword: event.target.value
    })
  }
  handleMatchedPassword(event){
    if(event.target.value === this.state.newPassword){
      this.setState({
        matched: true,
        matchedPassword: event.target.value
      })
    }
  }

  handlePasswordSubmit(event){
    event.preventDefault();

    let newPassword = {
      id: localStorage.userId,
      username: localStorage.username,
      password: this.state.currentPassword,
      matchedPassword: this.state.matchedPassword

    }
    console.log(newPassword);
    this.props.editPassword(newPassword);
  }

  handleChangeEmail(event){
    let validation = validator.validate(event.target.value)
    if(validation){
      this.setState({
        valid: true, 
        email: event.target.value,
        redirect: true
      })
    } 
  }

  handleEmailSubmit(event){
    event.preventDefault();

    let newEmail = {
      id: localStorage.userId,
      email: this.state.email
    }
    console.log(newEmail);
    this.props.editUser(newEmail);
  }

  render(){
    const { from } = this.props.location.state || { from: { pathname: '/dashboard' } }
    const redirect = this.state.redirect;

    if(redirect){
      return ( <Redirect to={from}/>)
    }
   
    return (
      <div id="settings-form">
        <ChangePassword 
          handleCurrentPassword={this.handleCurrentPassword}
          handleNewPassword={this.handleNewPassword}
          handleMatchedPassword={this.handleMatchedPassword}
          handlePasswordSubmit={this.handlePasswordSubmit}
          matched={this.state.matched} />

        <ChangeEmail 
          handleChangeEmail={this.handleChangeEmail}
          handleEmailSubmit={this.handleEmailSubmit}/>
        
      </div>

    )
  }


}


const ConnectedSettings = connect(
  null,
  {editUser,editPassword}
)(Settings);

export default withRouter(ConnectedSettings);