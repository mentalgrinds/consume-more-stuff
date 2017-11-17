import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { addUser,loadUsers } from '../../actions/users.js';
import PasswordRequirements from '../../components/PasswordRequirements';
import filterRegistration from '../../lib/filterRegistration';
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
      validLength: false,
      reqNotMet: false,
      show: false,
      validCapital: false,
      validNum: false,
      usernameTaken: false,
      emailTaken: false
    }

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.keyResetEmail = this.keyResetEmail.bind(this);
    this.keyResetUsername = this.keyResetUsername.bind(this);
  }

  keyResetEmail(e){
    if(e.keyCode === 8){ this.setState({ emailTaken: false }) }
  }

  keyResetUsername(e){
    if(e.keyCode === 8){
      this.setState({
        usernameTaken: false,
        validUsername: false
      }) }
  }




  handleChangeUsername(event){

    let val = event.target.value;
    if(val.length >=4){ this.setState({ validUsername: true }) }

    this.setState({ username: event.target.value })

    let unique = filterRegistration(this.props.users,'username',val);
    let username = unique !== undefined ? unique.username : null
    if(username === val){
      this.setState({ validUsername: false,usernameTaken: true})
    }
  }

  handleChangePassword(event){
    this.setState({show:true});
    let val = event.target.value;
    this.setState({ password: event.target.value });

    let passwordControls = {
      validLength: false,
      validNum: false,
      validCapital: false
    }

    if(val.length >=3){
      passwordControls.validLength = true;
      this.setState({ validLength: true });
    }else{
      passwordControls.validLength = false;
      this.setState({ validLength: false });
    };

    if(val.match(/\d+/g)){
      passwordControls.validNum = true;
      this.setState({ validNum: true });
    }else{
      passwordControls.validNum = false;
      this.setState({ validNum: false });
    };

    if(val.match(/[A-Z]/g)){
      passwordControls.validCapital = true;
      this.setState({ validCapital: true});
    }else{
      passwordControls.validCapital = false;
      this.setState({ validCapital: false });
    }

    if(passwordControls.validLength && passwordControls.validNum && passwordControls.validCapital){
      this.setState({ validPassword: true });
    }else{
      this.setState({ validPassword: false });
    }

  }

  handleChangeEmail(event){

    let val = event.target.value;
    let unique = filterRegistration(this.props.users,'email',val);
    let email = unique !== undefined ? unique.email : null
      this.setState({
        validEmail: validator.validate(val),
        email: event.target.value
      })
    if(email === val){
      this.setState({ emailTaken: true, validEmail: false})
    }
    if(val.length === 0){
      this.setState({ emailTaken: false })
    }
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
    else{ this.setState({reqNotMet: true}) }
      setTimeout(function(){
        this.setState({reqNotMet: false})
      }.bind(this),2000);
  }

    componentWillMount(){ this.props.loadUsers(); }

  render(){
    const show = this.state.show;
    const { from } = this.props.location.state || { from: { pathname: '/login' } }
    const redirect = this.state.registered;

    if(redirect){
      return ( <Redirect to={from}/>)
    }

    return (
      <div id="registration-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} placeholder="username" onChange={this.handleChangeUsername}
            onKeyDown={this.keyResetUsername}/>
          {this.state.usernameTaken ? "This username has been taken please try again" :null}
          {this.state.validUsername ? <img alt='true' width="20" height="20" src="http://bit.ly/2zAafF6"/> : null }

          <br></br>
          <br></br>


          <input type="password" value={this.state.password} placeholder="password" onChange={this.handleChangePassword}/>
          {show ?
            <PasswordRequirements
              validLength={this.state.validLength}
              validNum={this.state.validNum}
              validCapital={this.state.validCapital}/> : null }


          <br></br>
          <br></br>


          <input type="text" value={this.state.email} placeholder="email address" onChange={this.handleChangeEmail}
            onKeyDown={this.keyResetEmail}/>
          {this.state.validEmail ? <img alt='true' width="20" height="20" src="http://bit.ly/2zAafF6"/> : null }
          <br></br>
          <br></br>
          {this.state.emailTaken ? `We found this email in our system, if you forget your password please reset your password here:` :null}
          <br></br>
          {this.state.emailTaken ? <button>Reset Password</button> :null}
           <br></br> <br></br>



          <input type="submit" className="button" value="Complete Registration"/>
        </form>
        {this.state.reqNotMet ? "Requirements have not been met, please try again" : null}
      </div>

    )
  }


}

const mapStateToProps = (state) => {
  return{
    users: state.users
  }
}

const ConnectedRegistrationForm = connect(
  mapStateToProps,
  {addUser,loadUsers}
)(RegistrationForm);

export default withRouter(ConnectedRegistrationForm);