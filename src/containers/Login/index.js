import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkAuth } from '../../actions/login';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChangeUsername(event){
    this.setState({
      username: event.target.value
    })
  }

  handleChangePassword(event){
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();

    let newUser = {
      username: this.state.username,
      password: this.state.password
    }
    console.log(newUser);
    this.props.checkAuth(newUser);
  }


  render(){
    console.log('hello');
    console.log(this.props.user);
    return (
      <div id="login-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.username} placeholder="username" onChange={this.handleChangeUsername.bind(this)}/>
          <input type="password" value={this.state.password} placeholder="password" onChange={this.handleChangePassword.bind(this)}/>
          <input type="submit" className="button" value="Complete Registration"/>
        </form>
      </div>

    )
  }


}

const mapStatetoProps = (state) => {
  return {
    user : state.user

  }
}

const ConnectedLogin = connect(
  mapStatetoProps,
  {checkAuth}
)(Login)

export default ConnectedLogin;