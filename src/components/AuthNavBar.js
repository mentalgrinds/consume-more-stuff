import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../containers/Logout';

const AuthNav = () => {
  return (


      <div id="auth-nav">
        <div className="go-to-items">
          <Link to="/">Home</Link>
          <br/>
          <Link to="/all">All Items</Link>
        </div>

        <div className="user-tools">
          <Link to="/dashboard">Dashboard</Link>
          <br />
          <Link to="/settings">Settings</Link>
        </div>

        <div className="new-item">
          <Link className="new-item-button" to="/new-item">★New Item★</Link>
        </div>

        <Logout />
      </div>
      )
}

export default AuthNav;