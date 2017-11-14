import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { addUser } from '../../actions/users.js';
const validator = require("email-validator");

class RegistrationForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      registered: false,
      validEmail: false,
      validUsername: false,
      validPassword: false,
      reqNotMet: false
    }

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUsername(event){
    let val = event.target.value;
    if(val.length >=4){
      this.setState({ validUsername: true })
    }
    this.setState({
      username: event.target.value
    })
  }

  handleChangePassword(event){
    let val = event.target.value;
    if(val.length >=4){
      this.setState({ validPassword: true })
    }
    this.setState({
      password: event.target.value
    })
  }

  handleChangeEmail(event){
      this.setState({
        validEmail: validator.validate(event.target.value),
        email: event.target.value
      })
  }

  handleSubmit(event){
    event.preventDefault();
    let self = this.state;
    if(self.validUsername && self.validPassword && self.validEmail){
      let newUser = {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      }
      this.setState({registered: true,reqNotMet: false})
      this.props.addUser(newUser);
    }
    else{
      this.setState({reqNotMet: true})
      console.log("Requirements not met");

    }
  }

  render(){
    const { from } = this.props.location.state || { from: { pathname: '/login' } }
    const redirect = this.state.registered;

    if(redirect){
      return ( <Redirect to={from}/>)
    }

    return (
      <div id="registration-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} placeholder="username" onChange={this.handleChangeUsername}/>
          <input type="password" value={this.state.password} placeholder="password" onChange={this.handleChangePassword}/>
          <input type="text" value={this.state.email} placeholder="email address" onChange={this.handleChangeEmail}/>
          <input type="submit" className="button" value="Complete Registration"/>
        </form>
        {this.state.reqNotMet ? "Requirements have not been met, please try again" : null}
      </div>

    )
  }


}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => {
      dispatch(addUser(user))
    }
  }
}

const ConnectedRegistrationForm = connect(
  null,
  mapDispatchToProps
)(RegistrationForm);

export default withRouter(ConnectedRegistrationForm);