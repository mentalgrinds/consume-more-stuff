import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { loadUsers } from '../../actions/users.js';
import PasswordRequirements from '../../components/PasswordRequirements';
import filterRegistration from '../../lib/filterRegistration';
const validator = require("email-validator");


class SecurityQs extends Component {
  constructor(props){
    super(props);

    this.state = {
      questionOne:''
    }

    this.handleChangeUsername = this.handleChangeUsername.bind(this);

  }

  keyResetEmail(e){
    if(e.keyCode === 8){ this.setState({ emailTaken: false }) }
  }


  handleChangeUsername(e){
    let val = e.target.value;
  }


  handleSubmit(e){
    e.preventDefault();
  }

  componentWillMount(){ this.props.loadUsers(); }


  render(){

    return (
      <div id="registration-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} placeholder="username"/>

          <br></br>
          <br></br>

          <input type="text" value={this.state.username} placeholder="username"/>


          <br></br>
          <br></br>

          <input type="text" value={this.state.username} placeholder="username"/>



          <input type="submit" className="button" value="Complete"/>

        </form>
      </div>

    ) 
  }


}

const mapStateToProps = (state) => {
  return{
    users: state.users
  }
}

const ConnectedSecurityQs = connect(
  mapStateToProps,
  {loadUsers}
)(SecurityQs);

export default withRouter(ConnectedSecurityQs);