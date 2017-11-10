import React from 'react';
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