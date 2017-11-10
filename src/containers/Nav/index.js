import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Logout';
import AuthNavBar from '../../components/AuthNavBar';
import UnAuthNavBar from '../../components/UnAuthNavBar';

const Nav = () => {
  return (
    <div id="nav">
    {localStorage.userId ?
      <AuthNavBar />
      :
      <UnAuthNavBar />
    }
    </div>
  )


}

export default Nav;