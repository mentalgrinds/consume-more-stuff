import React from 'react';
import Logo from './logo';
import { Link } from 'react-router-dom';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import Logout from '../containers/Logout';
const image = 'header.jpg';
const bgurl = require(`../assets/${image}`);




const Header = () => {
  const username = localStorage.getItem('username')

  //const properName = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase()

  const properName = (localStorage.getItem('userId') ? username.charAt(0).toUpperCase() + username.slice(1).toLowerCase() : null)

/*  return (
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
        {localStorage.getItem('userId') ? ` ` : <div id="link-to-login"><Link to="/login">Login</Link></div>}
      </div>
    </div>
  );
}

export default Header;*/



  return (
    <StickyHeader

      // This is the sticky part of the header.
      header={
        <div className="Header_root">
          <div className="header_trans">High Quality Legal Goods and Services</div>
          {localStorage.getItem('userId') ?
            <div className="login-btn">
                <div className="login-btn2">
                  <span className="login-span"> HELLO, {properName}</span>
                  <span className="login-span">
                  <Logout/>
                  </span>
                </div>
              </div> :  ` ` }

          {localStorage.getItem('userId') ? ` ` :
          <a href="#log"><Link to="/login">
            <div className="login-btn">
              <div className="login-btn2">
                <span className="login-span">START SHOPPING</span>
                <span className="login-span">
                LOG IN
                </span>
              </div>
            </div>
          </Link></a>}
        </div>
      }
      backgroundImage={bgurl}
      children = {
        <div className="childrenImg"> </div>
      }
    >
     {/* <section>
        <p>
          This section will be what the sticky header scrolls over before entering into
          sticky state. See the gif above or run the test story book to see examples.
        </p>
      </section>*/}
    </StickyHeader>
  )
}

export default Header;
