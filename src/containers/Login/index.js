import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/login';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      authUser: this.props.user
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
      this.props.loginUser(newUser);
    }

  componentWillReceiveProps(nextProps){ 
    this.setState({authUser: nextProps.user.username})
  }







  render(){

    console.log('hello');
    console.log('logged in user',this.state.authUser);
    return (
      <div id="login-form">
      <div>HELLO {this.props.user.username}</div>
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
    user : state.loginUser

  }
}

const ConnectedLogin = connect(
  mapStatetoProps,
  {loginUser}
)(Login)

export default ConnectedLogin;