import React from 'react';
const logo = 'logo.png';
const logourl = require(`../assets/${logo}`);

const Logo = () => {
  return (
    <div id="header_logo">
      <img src={logourl}/>
    </div>
  );
}

export default Logo;