import React from 'react';

import Logo from './logo';
import {isLoggedIn} from '../lib/isLoggedIn'

const Header = () => {
  const username = localStorage.getItem('username')

  //const properName = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase()

  const properName = (isLoggedIn() ? username.charAt(0).toUpperCase() + username.slice(1).toLowerCase() : null)

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

        {
          ( isLoggedIn() ? `Hello, ${properName}` :  ` ` )
        }

      </div>
    </div>
  );
}

export default Header;