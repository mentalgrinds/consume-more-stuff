import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser, logoutUser } from '../../actions/login';
import { Redirect, withRouter } from 'react-router';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      count: 0,
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
    let val = this.state.count;
    val++;
    this.setState({count: val})
    event.preventDefault();
    let newUser = {
      username: this.state.username,
      password: this.state.password
    }
      this.props.loginUser(newUser);
      setTimeout(function() {
      if(localStorage.username !== undefined){
        this.setState({registered: true})
      }this.setState({err: true}); }.bind(this),900);
    }
    /*this is the hapi method - needs to be changed to flag from jesse idea*/
    reset(){
      this.setState({reset: true})
    }

  render(){
    const err = this.state.err;
    const count = (this.state.count === 3);
    const errMessage = (count ? 'Please Reset your password' : 'Incorrect Username or Password');
    const redirect = this.state.registered;
    if(redirect){ return ( <Redirect to='/dashboard'/>) }

    return (
      <div id="log" className="login-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.username} placeholder="username" onChange={this.handleChangeUsername.bind(this)}/>
          <input type="password" value={this.state.password} placeholder="password" onChange={this.handleChangePassword.bind(this)}/>
          <input
            type="submit"
            className="button"
            value="Login"/>
        </form>
        <br></br>
        {err ? errMessage : null }
        {count ? <Link to="/reset">   
        <button onClick={this.reset.bind(this)}>Reset</button></Link> : null}
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