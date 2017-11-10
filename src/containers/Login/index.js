import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../../actions/login';
import { Redirect, withRouter } from 'react-router';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      registered: false,
      err: false
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
      setTimeout(function() {
      if(localStorage.username !== undefined){
        this.setState({registered: true})
      }this.setState({err: true}); }.bind(this),1000);
    }
  


  render(){
    const { from } = this.props.location.state || {from: { pathname: '/dashboard' }}
    const redirect = this.state.registered;
    if(redirect){ return ( <Redirect to={from}/>) }

    return (
      <div id="login-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.username} placeholder="username" onChange={this.handleChangeUsername.bind(this)}/>
          <input type="password" value={this.state.password} placeholder="password" onChange={this.handleChangePassword.bind(this)}/>
          <input
            type="submit"
            className="button"
            value="Login"/>
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
  {loginUser,logoutUser}
)(Login)

export default withRouter(ConnectedLogin);