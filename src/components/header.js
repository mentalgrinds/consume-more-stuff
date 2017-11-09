import React from 'react';

import Logo from './logo';

const Header = () => {
  const username = localStorage.getItem('username')
  //const properName = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase()
  return (
    <div id="header">
      <Logo />
      <div>
        <h1>
          High Quality Marketplace for Legal Goods and Services
        </h1>
        <h2>
          Торговая площадка высокого качества для юридических товаров и услуг
        </h2>
        Hello, 
      </div>
    </div>
  );
}

export default Header;