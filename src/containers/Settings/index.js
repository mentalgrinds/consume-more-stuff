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
      redirect: false,
      passwordUpdated: localStorage.passwordUpdated,
      passwordError: localStorage.passwordError,
      emailError: false,
      changePassword: false,
      changeEmail: false
    }

    this.handleCurrentPassword = this.handleCurrentPassword.bind(this);
    this.handleNewPassword = this.handleNewPassword.bind(this);
    this.handleMatchedPassword = this.handleMatchedPassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
    this.backToSettings = this.backToSettings.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
  }

  changeEmail(){
    this.setState({
      changeEmail: true
    })

  }
  changePassword(){
    this.setState({
      changePassword: true
    })

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
        email: event.target.value
      })
    }
  }

  handleEmailSubmit(event){
    event.preventDefault();

    let newEmail = {
      id: localStorage.userId,
      email: this.state.email
    }
    //console.log(newEmail);
    if(this.state.valid){
      this.setState({
      emailError: false, redirect: true
    }) 
      this.props.editUser(newEmail);
    }
    else{
      this.setState({
      emailError: true
      }) 
    }
  }

  backToSettings(event){
    event.preventDefault();
    this.setState({
      redirect: true
    })
    localStorage.removeItem('passwordError');
    localStorage.removeItem('passwordUpdated');
  }


  render(){
    const { from } = this.props.location.state || { from: { pathname: '/dashboard' } }
    const redirect = this.state.redirect;

    if(redirect){
      return ( <Redirect to={from}/>)
    }
   
    return (
      <div id="settings-form">

        {this.state.changePassword ? 
          <ChangePassword 
            handleCurrentPassword={this.handleCurrentPassword}
            handleNewPassword={this.handleNewPassword}
            handleMatchedPassword={this.handleMatchedPassword}
            handlePasswordSubmit={this.handlePasswordSubmit}
            matched={this.state.matched}
            passwordUpdated={this.state.passwordUpdated}
            passwordError={this.state.passwordError} 
            backToSettings={this.backToSettings}/>
        : <button onClick={this.changePassword}>CHANGE PASSWORD</button> }

        

        {this.state.changeEmail ? 
          <ChangeEmail 
            handleChangeEmail={this.handleChangeEmail}
            handleEmailSubmit={this.handleEmailSubmit}
            backToSettings={this.backToSettings}
            emailError={this.state.emailError}/>
        : <button onClick={this.changeEmail}>CHANGE EMAIL</button> }
        
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return{
    success: state.users
  }
}




const ConnectedSettings = connect(
  mapStateToProps,
  {editUser,editPassword}
)(Settings);

export default withRouter(ConnectedSettings);