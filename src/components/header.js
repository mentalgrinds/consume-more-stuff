import React from 'react';
import Logo from './logo';

const Header = () => {
  const username = localStorage.getItem('username')

  //const properName = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase()

  const properName = (localStorage.getItem('userId') ? username.charAt(0).toUpperCase() + username.slice(1).toLowerCase() : null)

  return (
    <div id="header">
      <Logo />
      <div id="header-text">
        <h1>
          High Quality Marketplace for Legal Goods and Services
        </h1>
        <p>
          Kvalitetsmarknad för juridiska varor och tjänster
        </p>
      </div>
      <div id="hello">
        {localStorage.getItem('userId') ? `Hello, ${properName}` :  ` ` }
      </div>
    </div>
  );
}

export default Header;