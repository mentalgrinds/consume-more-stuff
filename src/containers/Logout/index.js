import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/login';

class Logout extends Component {


  handleLogout(event){
    event.preventDefault();
    this.props.logoutUser(localStorage.getItem('userId'));
    localStorage.setItem('auth', false);
    localStorage.setItem('username', null);
    localStorage.setItem('userId', null);
  } 

  render(){
    return (
      <div id="logout-form">
        <form onSubmit={this.handleLogout.bind(this)}>
          <input type="submit" className="button" value="Logout"/>
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

const ConnectedLogout = connect(
  mapStatetoProps,
  {logoutUser}
)(Logout)

export default ConnectedLogout;