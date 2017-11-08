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

    this.props.addUser(newUser);
  }

  componentDidMount(){
    this.props.checkAuth();
  }

  render(){
    console.log('hello');
    console.log(this.props.user);
    return (
      <div id="login-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} placeholder="username" onChange={this.handleChangeUsername}/>
          <input type="password" value={this.state.password} placeholder="password" onChange={this.handleChangePassword}/>
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


const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth: () => {
      dispatch(checkAuth())
    }
  }
}

const ConnectedLogin = connect(
  mapStatetoProps,
  mapDispatchToProps
)(Login)

export default ConnectedLogin;