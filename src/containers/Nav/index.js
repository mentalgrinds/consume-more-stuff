import React from 'react';
import AuthNavBar from '../../components/AuthNavBar';
import UnAuthNavBar from '../../components/UnAuthNavBar';

const Nav = () => {
  return (
    <div>
      <div class="area">
      </div>
      <nav class="main-menu">
      {localStorage.userId ?
        <AuthNavBar />
        :
        <UnAuthNavBar />
      }
      </nav>
    </div>
  )
}

export default Nav;