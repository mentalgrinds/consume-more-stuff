import React from 'react';
import { Link } from 'react-router-dom';

const UnAuthNavBar = () => {
  return (
      <div id="unauth-nav">
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/all">All Items</Link>
        <br></br>
        <Link to="/register">Register</Link>
      </div>
      )
}

export default UnAuthNavBar;