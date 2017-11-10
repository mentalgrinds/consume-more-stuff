import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/login';

class Logout extends Component {


  handleLogout(event){
    localStorage.clear();
    this.props.logoutUser();
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